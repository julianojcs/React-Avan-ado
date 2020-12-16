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
    title: 'Titulo default',
    description: 'Description Default'
  } // Pode-se declarar os args cos valores default aqui tb
} as Meta

export const Basic: Story = (args) => <Main {...args} />
//Opcional caso os valores defaults já tenham sido definidos no próprio componente
// Basic.args = {
//   title: 'React Avançado',
//   description: 'TypeScript, ReactJS, NextJS e Styled Component'
// }
