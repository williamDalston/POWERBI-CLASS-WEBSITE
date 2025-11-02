// Monaco types reference - actual Monaco will be imported dynamically
type Monaco = typeof import('monaco-editor')

// DAX Language Definition
const daxLanguageConfiguration = {
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/'],
  },
  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ],
  autoClosingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
  ],
  surroundingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
  ],
}

const daxTokensProvider = {
  keywords: [
    // DAX Functions
    'SUM', 'AVERAGE', 'COUNT', 'COUNTA', 'COUNTROWS', 'MIN', 'MAX',
    'CALCULATE', 'FILTER', 'ALL', 'VALUES', 'DISTINCT', 'RELATED',
    'RELATEDTABLE', 'SUMX', 'AVERAGEX', 'COUNTX', 'MINX', 'MAXX',
    'DIVIDE', 'MOD', 'ROUND', 'ROUNDUP', 'ROUNDDOWN', 'TRUNC',
    'ABS', 'SQRT', 'POWER', 'LOG', 'EXP',
    'DATEDIFF', 'DATEDADD', 'YEAR', 'MONTH', 'DAY', 'DATE',
    'TODAY', 'NOW', 'EOMONTH', 'WEEKDAY', 'WEEKNUM',
    'TOTALYTD', 'TOTALQTD', 'TOTALMTD', 'TOTALYTD', 'SAMEPERIODLASTYEAR',
    'DATEADD', 'DATESBETWEEN', 'DATESINPERIOD', 'DATESYTD',
    'RANKX', 'TOPN', 'PREVIOUSMONTH', 'NEXTMONTH',
    'IF', 'SWITCH', 'IFERROR', 'AND', 'OR', 'NOT',
    'CONCATENATE', 'LEFT', 'RIGHT', 'MID', 'FIND', 'SEARCH', 'SUBSTITUTE',
    'UPPER', 'LOWER', 'TRIM', 'LEN',
    'HASONEVALUE', 'SELECTEDVALUE', 'ISBLANK', 'ISTEXT', 'ISNUMBER',
    'VAR', 'RETURN',
    'EARLIER', 'EARLIEST',
    // Operators
    'IN', 'NOT IN',
    // Data Types
    'TRUE', 'FALSE',
    // Scoping
    'CALCULATETABLE',
  ],
  typeKeywords: ['MEASURE', 'CALCULATED COLUMN'],
  operators: ['=', '<>', '>', '<', '>=', '<=', '+', '-', '*', '/', '%', '&&', '||'],
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  tokenizer: {
    root: [
      // Identifiers and keywords
      [
        /[a-z_$][\w$]*/,
        {
          cases: {
            '@keywords': 'keyword',
            '@typeKeywords': 'type',
            '@default': 'identifier',
          },
        },
      ],
      // Whitespace
      { include: '@whitespace' },
      // Numbers
      [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
      [/\d+/, 'number'],
      // Delimiters and operators
      [/[{}()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [
        /@symbols/,
        {
          cases: {
            '@operators': 'operator',
            '@default': '',
          },
        },
      ],
      // Strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'], // Non-terminated string
      [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
      // Comments
      [/\/\*/, 'comment', '@comment'],
      [/\/\/.*$/, 'comment'],
    ],
    comment: [
      [/[^/*]+/, 'comment'],
      [/\/\*/, 'comment', '@push'], // Nested comment
      [/\/\*/, 'comment.invalid'],
      [/\*\//, 'comment', '@pop'],
      [/[/*]/, 'comment'],
    ],
    string: [
      [/[^\\"]+/, 'string'],
      [/\\./, 'string.escape.invalid'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
    ],
    whitespace: [[/[ \t\r\n]+/, 'white']],
  },
}

// M Language Definition (Power Query)
const mLanguageConfiguration = {
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/'],
  },
  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ],
  autoClosingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' },
  ],
  surroundingPairs: [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
    { open: '"', close: '"' },
  ],
}

const mTokensProvider = {
  keywords: [
    // M Keywords
    'let', 'in', 'each', 'if', 'then', 'else', 'as', 'meta', 'section',
    'shared', 'true', 'false', 'null', 'type', 'required', 'optional',
    'nullable', 'external', 'try', 'otherwise',
    // Transformation Functions
    'Table.TransformColumns', 'Table.AddColumn', 'Table.RenameColumns',
    'Table.SelectColumns', 'Table.ReplaceValue', 'Table.TransformRowFilters',
    'Table.Buffer', 'Table.Group', 'Table.ToList', 'Table.ToRecords',
    'Table.ToRows', 'Table.ToColumns', 'Table.PromoteHeaders',
    'Table.DemoteHeaders', 'Table.FirstN', 'Table.LastN', 'Table.Skip',
    'Table.Range', 'Table.Sort', 'Table.Distinct', 'Table.DuplicateColumn',
    'Table.Join', 'Table.NestedJoin', 'Table.Combine', 'Table.ReverseRows',
    'Table.SplitColumn', 'Table.Split', 'Table.ConformToPageReader',
    'Table.ExpandListColumn', 'Table.ExpandRecordColumn', 'Table.ExpandTableColumn',
    'Table.Unpivot', 'Table.UnpivotOtherColumns', 'Table.UnpivotColumns',
    'Table.Pivot', 'Table.TransformColumnTypes', 'Table.Buffer',
    // List Functions
    'List.Sum', 'List.Average', 'List.Count', 'List.Max', 'List.Min',
    'List.Contains', 'List.FindText', 'List.PositionOf', 'List.Reverse',
    'List.Sort', 'List.Distinct', 'List.Combine', 'List.First',
    'List.FirstN', 'List.Last', 'List.LastN', 'List.Skip', 'List.Range',
    'List.Zip', 'List.Generate', 'List.Transform', 'List.TransformMany',
    'List.Select', 'List.Sum', 'List.Product', 'List.Numbers', 'List.Dates',
    'List.Duration', 'List.DateTimeZone',
    // Value Functions
    'Value.ReplaceType', 'Value.Add', 'Value.FromText', 'Value.Type',
    'Value.NativeQuery', 'Value.Invoke', 'Value.Transform', 'Value.TransformExpression',
    // Row/Record Functions
    'Table.SelectRows', 'Table.SelectRowFields', 'Table.ReplaceColumns',
    'Record.Field', 'Record.FieldNames', 'Record.FieldValues', 'Record.ToTable',
    'Record.AddField', 'Record.RenameFields', 'Record.RemoveFields',
    'Record.FromList', 'Record.FromTable',
    // Data Source Functions
    'Excel.Workbook', 'Excel.CurrentWorkbook', 'Csv.Document',
    'Text.FromBinary', 'Binary.FromText', 'Table.FromRecords',
    'Table.FromList', 'Table.FromValue',
    // Type Functions
    'type', 'Type.Is', 'Type.Function', 'Type.List', 'Type.Table',
    'Type.Record', 'Type.DateTime', 'Type.Date', 'Type.Time',
    'Type.Duration', 'Type.DateTimeZone', 'Type.Number', 'Type.Text',
    'Type.Logical', 'Type.Null', 'Type.Binary',
    // Other Functions
    'Table.ColumnNames', 'Table.RowCount', 'Table.ColumnCount',
    'Duration.TotalDays', 'Duration.TotalHours', 'Duration.TotalMinutes',
    'Date.Year', 'Date.Month', 'Date.Day', 'Date.AddDays',
    'Date.AddMonths', 'Date.StartOfWeek', 'Date.EndOfWeek',
    'Text.Upper', 'Text.Lower', 'Text.Trim', 'Text.Replace',
    'Text.Start', 'Text.End', 'Text.Middle', 'Text.Length',
    'Number.Round', 'Number.RoundUp', 'Number.RoundDown',
    'Text.Split', 'Text.Combine', 'Text.Insert', 'Text.Remove',
  ],
  operators: ['=', '<>', '>', '<', '>=', '<=', '+', '-', '*', '/', '<>'],
  symbols: /[=><!~?:&|+\-*\/\^%#]+/,
  tokenizer: {
    root: [
      // Identifiers and keywords
      [
        /[a-z_][\w]*/,
        {
          cases: {
            '@keywords': 'keyword',
            '@default': 'identifier',
          },
        },
      ],
      // Whitespace
      { include: '@whitespace' },
      // Numbers
      [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
      [/\d+/, 'number'],
      // Delimiters and operators
      [/[{}()\[\]]/, '@brackets'],
      [/[<>](?!@symbols)/, '@brackets'],
      [
        /@symbols/,
        {
          cases: {
            '@operators': 'operator',
            '@default': '',
          },
        },
      ],
      // Strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'], // Non-terminated string
      [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
      // Comments
      [/\/\*/, 'comment', '@comment'],
      [/\/\/.*$/, 'comment'],
    ],
    comment: [
      [/[^/*]+/, 'comment'],
      [/\/\*/, 'comment', '@push'], // Nested comment
      [/\/\*/, 'comment.invalid'],
      [/\*\//, 'comment', '@pop'],
      [/[/*]/, 'comment'],
    ],
    string: [
      [/[^\\"]+/, 'string'],
      [/\\./, 'string.escape.invalid'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
    ],
    whitespace: [[/[ \t\r\n]+/, 'white']],
  },
}

// Configure Monaco Editor languages
export async function configureMonacoLanguages() {
  // Dynamically import Monaco to avoid SSR issues
  const monaco = await import('monaco-editor')
  
  // Register DAX language
  monaco.languages.register({ id: 'dax' })
  monaco.languages.setLanguageConfiguration('dax', daxLanguageConfiguration as any)
  monaco.languages.setMonarchTokensProvider('dax', daxTokensProvider as any)

  // Register M language
  monaco.languages.register({ id: 'm' })
  monaco.languages.setLanguageConfiguration('m', mLanguageConfiguration as any)
  monaco.languages.setMonarchTokensProvider('m', mTokensProvider as any)
}

// Theme configuration for code editors
export const editorTheme = {
  'vs-light': {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'keyword', foreground: '0000FF', fontStyle: 'bold' },
      { token: 'type', foreground: '800000', fontStyle: 'bold' },
      { token: 'string', foreground: '008000' },
      { token: 'comment', foreground: '008000', fontStyle: 'italic' },
      { token: 'number', foreground: '0000FF' },
      { token: 'operator', foreground: '000000' },
    ],
    colors: {
      'editor.background': '#FFFFFF',
      'editor.foreground': '#000000',
      'editor.lineHighlightBackground': '#F0F0F0',
      'editor.selectionBackground': '#ADD6FF',
      'editorCursor.foreground': '#000000',
    },
  },
}

