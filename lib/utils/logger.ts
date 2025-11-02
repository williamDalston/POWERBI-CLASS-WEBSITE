/**
 * Centralized logging utility
 * 
 * In development: Logs to console
 * In production: Sends to error tracking service (when configured)
 * 
 * Usage:
 *   import { logger } from '@/lib/utils/logger'
 *   logger.log('User action', { userId: '123' })
 *   logger.error(new Error('Something went wrong'), { context: 'checkout' })
 *   logger.warn('Deprecated API used')
 */

type LogLevel = 'log' | 'warn' | 'error'

interface LogContext {
  [key: string]: any
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'

  log(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.log(`[LOG] ${message}`, ...args)
    }
    // In production, send to analytics/logging service if needed
    this.sendToService('log', message, args)
  }

  warn(message: string, ...args: any[]): void {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, ...args)
    }
    this.sendToService('warn', message, args)
  }

  error(error: Error | string, context?: LogContext): void {
    const errorMessage = error instanceof Error ? error.message : error
    const errorStack = error instanceof Error ? error.stack : undefined

    if (this.isDevelopment) {
      console.error(`[ERROR] ${errorMessage}`, {
        error,
        stack: errorStack,
        context,
      })
    }

    // Send to error tracking service in production
    this.sendToService('error', errorMessage, { error, stack: errorStack, context })
  }

  private sendToService(level: LogLevel, message: string, data?: any): void {
    // Only send to services in production
    if (!this.isDevelopment && typeof window !== 'undefined') {
      // Example: Send to Sentry
      // if (level === 'error' && window.Sentry) {
      //   window.Sentry.captureException(data?.error || new Error(message), {
      //     extra: data?.context,
      //   })
      // }

      // Example: Send to analytics
      // if (window.gtag) {
      //   window.gtag('event', 'exception', {
      //     description: message,
      //     fatal: level === 'error',
      //   })
      // }
    }
  }
}

export const logger = new Logger()

// Convenience exports
export const log = logger.log.bind(logger)
export const warn = logger.warn.bind(logger)
export const error = logger.error.bind(logger)

