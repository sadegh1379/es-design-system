import { Meta, StoryObj } from '@storybook/react';
import Spinner from '../atom/loaders/spinner';
import LoaderCircle from '../atom/loaders/circle/circle';
import SkeletonFetchingLoading from '../atom/loaders/skeleton';

const meta = {
  title: 'Atom/Loaders',
  component: Spinner,
  parameters: {
    expanded: true
  },
  tags: ['autodocs'],
  argTypes: {
    variation: {
      control: 'select',
      options: ['basic']
    }
  }
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Playground: Story = {
  args: {
    variation: 'basic'
  }
};

const TableHeader = () => (
  <thead>
    <tr>
      <th scope="col" className="px-6 py-4 text-danger-500 font-semibold border-b text-center">
        {'LOADER TYPE'}
      </th>
      <th scope="col" className="px-6 py-4 text-gray-700 font-semibold border-b text-center">
        {'PREVIEW'}
      </th>
    </tr>
  </thead>
);

const TableBody = () => (
  <tbody>
    <tr dir={'rtl'} className="border-b">
      <td className="px-6 py-4 font-medium text-gray-900 text-center">Spinner</td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      </td>
    </tr>
    <tr dir={'rtl'} className="border-b">
      <td className="px-6 py-4 font-medium text-gray-900 text-center">Circle</td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center">
          <LoaderCircle size="medium" variation="basic" />
        </div>
      </td>
    </tr>
  
    <tr dir={'rtl'} className="border-b">
      <td className="px-6 py-4 font-medium text-gray-900 text-center">Skeleton</td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center">
          <SkeletonFetchingLoading isFetching={true} isLoading={false}>
            test children
          </SkeletonFetchingLoading>
        </div>
      </td>
    </tr>
  </tbody>
);

export const AllLoaders: Story = {
  render: () => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  )
};
