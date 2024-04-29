import type { Preview } from "@storybook/react";
import '../stories/global.css'
export const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Getting Started', 
          ['Introduction', 'Installation', 'Configuration'], 
          'API',
          ['useNiceForm', 'renderField', [
            'Basic Example',
            'active',
            'dependsOnToClear',
            'Input and Output',
            'Debounce',
            'Render with callback',
            'validate',
            'Render node',
            'Memoization'
          ]],
          'EXAMPLE'
        ]
      }
    },
  }
}

export default preview