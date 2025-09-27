import { Meta, StoryObj } from '@storybook/react';
import Button from '../atom/button';
import { buttonVariations, buttonSizes, buttonColors } from '../atom/button/story.params';

const meta = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    expanded: true
  },
  tags: ['autodocs'],
  argTypes: {
    variation: {
      control: 'select',
      options: buttonVariations
    },
    size: {
      control: 'select',
      options: buttonSizes
    },
    color: {
      control: 'select',
      options: buttonColors
    }
  }
} as Meta<typeof Button>;

export default meta;
type story = StoryObj<typeof Button>;

export const Playground: story = {
  args: {
    children: 'test'
  }
};

const TableHeader = () => (
  <thead>
    <tr>
      <th scope="col" className="px-6 py-4 text-danger-500 font-semibold border-b text-center">
        {'VARIATION'}
      </th>
      {buttonSizes.map(item => (
        <th
          key={item}
          scope="col"
          className="px-6 py-4 text-gray-700 font-semibold border-b text-center"
        >
          {item}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBody = ({ variation }: { variation: 'basic' | 'noStyle' | 'outline' }) => (
  <tbody>
    {buttonColors.map(color => (
      <tr key={color} dir={'rtl'} className="border-b">
        <td className="px-6 py-4 font-medium text-gray-900 text-center">{color}</td>
        {buttonSizes.map(size => (
          <td key={size} className="px-6 py-4">
            <div className="flex justify-center items-center">
              <Button variation={variation} color={color} size={size}>
                دکمه
              </Button>
            </div>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

export const Basic: story = {
  render: () => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <TableHeader />
        <TableBody variation="basic" />
      </table>
    </div>
  )
};

export const NoStyle: story = {
  render: () => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <TableHeader />
        <TableBody variation="noStyle" />
      </table>
    </div>
  )
};

export const Outlined: story = {
  render: () => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <TableHeader />
        <TableBody variation="outline" />
      </table>
    </div>
  )
};
