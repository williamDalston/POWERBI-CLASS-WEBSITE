'use client'

import { useState, useCallback, useMemo } from 'react'
import CTAButton from '@/components/shared/CTAButton'
import TrustBadges from './TrustBadges'
import { MobileFormInput } from '@/components/shared/MobileFormField'
import { logger } from '@/lib/utils/logger'

interface FieldState {
  isValid: boolean | null // null = not validated yet, true = valid, false = invalid
  hasBlurred: boolean // Track if field has been blurred for validation trigger
}

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    plan: 'annual', // default to annual
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fieldStates, setFieldStates] = useState<Record<string, FieldState>>({
    email: { isValid: null, hasBlurred: false },
    password: { isValid: null, hasBlurred: false },
    confirmPassword: { isValid: null, hasBlurred: false },
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Real-time validation functions (memoized to prevent re-creation)
  const validateEmail = useCallback((email: string): string => {
    if (!email) return 'Email is required'
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid'
    return ''
  }, [])

  const validatePassword = useCallback((password: string): string => {
    if (!password) return 'Password is required'
    if (password.length < 8) return 'Password must be at least 8 characters'
    return ''
  }, [])

  const validateConfirmPassword = useCallback((confirmPassword: string, password: string): string => {
    if (!confirmPassword) return 'Please confirm your password'
    if (confirmPassword !== password) return 'Passwords do not match'
    return ''
  }, [])

  const getPasswordStrength = useCallback((password: string): { strength: 'weak' | 'medium' | 'strong'; text: string; color: string } => {
    if (!password) return { strength: 'weak', text: '', color: 'gray' }
    if (password.length < 8) return { strength: 'weak', text: 'Too short', color: 'red' }
    
    let strength = 0
    if (password.length >= 8) strength++
    if (password.length >= 12) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^a-zA-Z0-9]/.test(password)) strength++

    if (strength <= 2) return { strength: 'weak', text: 'Weak', color: 'red' }
    if (strength <= 4) return { strength: 'medium', text: 'Medium', color: 'yellow' }
    return { strength: 'strong', text: 'Strong', color: 'green' }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Real-time validation if field has been blurred
    if (fieldStates[name]?.hasBlurred) {
      let error = ''
      
      if (name === 'email') {
        error = validateEmail(value)
      } else if (name === 'password') {
        error = validatePassword(value)
        // Also re-validate confirm password if it exists
        if (formData.confirmPassword) {
          const confirmError = validateConfirmPassword(formData.confirmPassword, value)
          setErrors((prev) => {
            // Only update if error actually changed
            if (prev.confirmPassword === confirmError) return prev
            return { ...prev, confirmPassword: confirmError }
          })
          setFieldStates((prev) => {
            const newState = {
              isValid: !confirmError,
              hasBlurred: prev.confirmPassword?.hasBlurred || false,
            }
            // Only update if state actually changed
            if (prev.confirmPassword?.isValid === newState.isValid) return prev
            return {
              ...prev,
              confirmPassword: newState,
            }
          })
        }
      } else if (name === 'confirmPassword') {
        error = validateConfirmPassword(value, formData.password)
      }

      setErrors((prev) => {
        // Only update if error actually changed
        if (prev[name] === error) return prev
        return { ...prev, [name]: error }
      })
      setFieldStates((prev) => {
        const newState = {
          isValid: !error,
          hasBlurred: prev[name]?.hasBlurred || false,
        }
        // Only update if state actually changed
        if (prev[name]?.isValid === newState.isValid && prev[name]?.hasBlurred === newState.hasBlurred) return prev
        return {
          ...prev,
          [name]: newState,
        }
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let error = ''
    
    if (name === 'email') {
      error = validateEmail(value)
    } else if (name === 'password') {
      error = validatePassword(value)
      // Also re-validate confirm password if it exists
      if (formData.confirmPassword) {
        const confirmError = validateConfirmPassword(formData.confirmPassword, value)
        setErrors((prev) => {
          // Only update if error actually changed
          if (prev.confirmPassword === confirmError) return prev
          return { ...prev, confirmPassword: confirmError }
        })
        setFieldStates((prev) => {
          const newState = {
            isValid: !confirmError,
            hasBlurred: prev.confirmPassword?.hasBlurred || false,
          }
          // Only update if state actually changed
          if (prev.confirmPassword?.isValid === newState.isValid) return prev
          return {
            ...prev,
            confirmPassword: newState,
          }
        })
      }
    } else if (name === 'confirmPassword') {
      error = validateConfirmPassword(value, formData.password)
    }

    setErrors((prev) => {
      // Only update if error actually changed
      if (prev[name] === error) return prev
      return { ...prev, [name]: error }
    })
    setFieldStates((prev) => {
      const newState = {
        isValid: !error,
        hasBlurred: true,
      }
      // Only update if state actually changed
      if (prev[name]?.isValid === newState.isValid && prev[name]?.hasBlurred === newState.hasBlurred) return prev
      return {
        ...prev,
        [name]: newState,
      }
    })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    const passwordError = validatePassword(formData.password)
    if (passwordError) newErrors.password = passwordError

    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password)
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError

    setErrors(newErrors)
    // Update field states
    setFieldStates({
      email: { isValid: !emailError, hasBlurred: true },
      password: { isValid: !passwordError, hasBlurred: true },
      confirmPassword: { isValid: !confirmPasswordError, hasBlurred: true },
    })
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('[aria-invalid="true"]')
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
        ;(firstErrorField as HTMLElement).focus()
      }
      return
    }

    setIsSubmitting(true)

    // Stripe integration will be handled here
    // This form validates and prepares data for Stripe payment processing
    try {
      // TODO: Replace with actual Stripe checkout session creation
      // Example: const session = await createCheckoutSession(formData)
      // Then redirect to: router.push(session.url)
      
      // For development: simulate successful submission
      logger.log('Form submitted', { formData })
      setIsSubmitting(false)
      
      // In production, redirect to Stripe checkout
      // router.push('/api/checkout')
    } catch (error) {
      logger.error(new Error('Checkout error'), { error })
      setIsSubmitting(false)
      setErrors({ submit: 'There was an error processing your payment. Please try again.' })
    }
  }

  // Get validation summary (memoized)
  const validationSummary = useMemo(
    () => Object.keys(errors).filter(key => key !== 'submit' && errors[key]).length,
    [errors]
  )
  const passwordStrength = useMemo(
    () => getPasswordStrength(formData.password),
    [formData.password, getPasswordStrength]
  )

  const annualPrice = 199
  const monthlyPrice = 29
  const displayPrice = formData.plan === 'annual' ? annualPrice : monthlyPrice

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
      {/* Left Column: Account & Payment */}
      <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-serif text-primary-900 mb-4 sm:mb-6">Account & Payment</h2>

        {/* ARIA Live Region for Validation Errors */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {validationSummary > 0 && `There are ${validationSummary} error${validationSummary > 1 ? 's' : ''} in the form. Please fix them before submitting.`}
        </div>

        {/* Validation Summary */}
        {isSubmitting === false && validationSummary > 0 && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <p className="font-sans font-semibold text-red-900 mb-1">
                  Please fix {validationSummary} error{validationSummary > 1 ? 's' : ''} before submitting
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                  {errors.email && <li>Email: {errors.email}</li>}
                  {errors.password && <li>Password: {errors.password}</li>}
                  {errors.confirmPassword && <li>Confirm Password: {errors.confirmPassword}</li>}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Form Submission Error */}
        {errors.submit && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
            <p className="font-sans text-red-800">{errors.submit}</p>
          </div>
        )}

        <div className="space-y-4 sm:space-y-6">
          {/* Email */}
          <div className="relative">
            <MobileFormInput
              type="email"
              id="email"
              name="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
            {/* Visual Feedback Icon */}
            {fieldStates.email?.hasBlurred && fieldStates.email.isValid !== null && (
              <div className="absolute right-3 top-9 sm:top-10 pointer-events-none">
                {fieldStates.email.isValid ? (
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Valid email">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Invalid email">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <MobileFormInput
              type="password"
              id="password"
              name="password"
              label="Create Password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              placeholder="Minimum 8 characters"
              required
              autoComplete="new-password"
            />
            {/* Visual Feedback Icon */}
            {fieldStates.password?.hasBlurred && fieldStates.password.isValid !== null && (
              <div className="absolute right-3 top-9 sm:top-10 pointer-events-none">
                {fieldStates.password.isValid ? (
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Valid password">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Invalid password">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            )}
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        passwordStrength.color === 'green'
                          ? 'bg-green-600'
                          : passwordStrength.color === 'yellow'
                          ? 'bg-yellow-500'
                          : passwordStrength.color === 'red'
                          ? 'bg-red-600'
                          : 'bg-gray-400'
                      }`}
                      style={{
                        width:
                          passwordStrength.strength === 'weak'
                            ? '33%'
                            : passwordStrength.strength === 'medium'
                            ? '66%'
                            : passwordStrength.strength === 'strong'
                            ? '100%'
                            : '0%',
                      }}
                    />
                  </div>
                  {passwordStrength.text && (
                    <span
                      className={`text-xs font-sans font-medium ${
                        passwordStrength.color === 'green'
                          ? 'text-green-600'
                          : passwordStrength.color === 'yellow'
                          ? 'text-yellow-600'
                          : passwordStrength.color === 'red'
                          ? 'text-red-600'
                          : 'text-gray-500'
                      }`}
                    >
                      {passwordStrength.text}
                    </span>
                  )}
                </div>
                <p className="text-xs font-sans text-gray-600">
                  Use 8+ characters with mix of letters, numbers, and symbols for better security
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <MobileFormInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              placeholder="Re-enter your password"
              required
              autoComplete="new-password"
            />
            {/* Visual Feedback Icon */}
            {fieldStates.confirmPassword?.hasBlurred && fieldStates.confirmPassword.isValid !== null && (
              <div className="absolute right-3 top-9 sm:top-10 pointer-events-none">
                {fieldStates.confirmPassword.isValid ? (
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Passwords match">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Passwords do not match">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            )}
          </div>

          {/* Payment Details */}
          <div>
            <label className="block text-sm font-sans font-semibold text-gray-700 mb-2">
              Payment Details
            </label>
            <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                  <span className="text-sm font-sans text-gray-700">Secure payment processing</span>
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-xs font-sans text-gray-600 text-center">
                  Your payment information will be securely processed by Stripe. We never store your card details.
                </p>
              </div>
              {/* Stripe Elements will be mounted here via @stripe/react-stripe-js */}
              <div id="stripe-card-element" className="mt-4">
                {/* Stripe CardElement component will be rendered here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-8 h-fit sticky top-4">
        <h2 className="text-xl sm:text-2xl font-serif text-primary-900 mb-4 sm:mb-6">Order Summary</h2>

        <div className="space-y-6">
          {/* Plan Selection */}
          <div>
            <label className="block text-sm font-sans font-semibold text-gray-700 mb-3">
              Select Plan
            </label>
            <div className="space-y-3">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-accent active:border-accent transition-colors touch-manipulation min-h-[44px]">
                <input
                  type="radio"
                  name="plan"
                  value="monthly"
                  checked={formData.plan === 'monthly'}
                  onChange={handleChange}
                  className="mr-3 text-accent focus:ring-accent w-5 h-5 touch-manipulation"
                />
                <div className="flex-grow">
                  <div className="font-sans font-semibold text-gray-900 text-base sm:text-lg">Monthly Plan</div>
                  <div className="font-sans text-sm sm:text-base text-gray-600">${monthlyPrice}/month</div>
                </div>
              </label>

              <label className="flex items-center p-4 border-2 border-accent rounded-lg cursor-pointer bg-accent-50 active:bg-accent-100 transition-colors touch-manipulation min-h-[44px]">
                <input
                  type="radio"
                  name="plan"
                  value="annual"
                  checked={formData.plan === 'annual'}
                  onChange={handleChange}
                  className="mr-3 text-accent focus:ring-accent w-5 h-5 touch-manipulation"
                />
                <div className="flex-grow">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-sans font-semibold text-gray-900 text-base sm:text-lg">Annual Plan</span>
                    <span className="bg-accent text-white text-xs font-sans font-semibold px-2 py-1 rounded">
                      Best Value
                    </span>
                  </div>
                  <div className="font-sans text-sm sm:text-base text-gray-600">
                    ${annualPrice}/year <span className="text-accent font-semibold">Save 40%</span>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-gray-200 pt-6 space-y-3">
            <div className="flex justify-between font-sans">
              <span className="text-gray-700">
                {formData.plan === 'annual' ? 'Annual Plan' : 'Monthly Plan'}
              </span>
              <span className="font-semibold text-gray-900">${displayPrice}</span>
            </div>
            <div className="flex justify-between font-sans text-sm text-gray-600">
              <span>30-Day Money-Back Guarantee</span>
              <span className="text-green-600">Included</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between font-sans text-lg font-semibold">
                <span>Total</span>
                <span className="text-primary-900">${displayPrice}</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <CTAButton
            type="submit"
            variant="primary"
            fullWidth
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Complete Purchase & Start Learning'}
          </CTAButton>

          {/* Guarantee Reiteration */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 sm:p-5 border border-green-200">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm font-sans font-semibold text-gray-900 mb-1">
                  30-Day Money-Back Guarantee
                </p>
                <p className="text-xs font-sans text-gray-700 leading-relaxed">
                  If you're not completely satisfied with the program, contact us within 30 days for a full refund. No questions asked.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <TrustBadges />
        </div>
      </div>
    </form>
  )
}
