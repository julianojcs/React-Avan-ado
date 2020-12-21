import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

// const argTypes = {
//   label: {
//     name: 'title',
//     type: { name: 'string', required: true },
//     defaultValue: 'Hello',
//     description: 'demo description',
//     table: {
//       type: { summary: 'string' },
//       defaultValue: { summary: 'Hello' }
//     },
//     control: {
//       type: 'text'
//     }
//   }
// }

export default {
  title: 'Main',
  component: Main,
  // argTypes,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Main {...args} />
