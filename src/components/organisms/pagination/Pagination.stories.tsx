import { ComponentMeta } from "@storybook/react";
import Pagination from "./Pagination";

export default {
  title: 'Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

export const Default = () => {
  return (
    <Pagination
      onPaginatePrevious={() => {}}
      onPaginateNext={() => {}}
      currentPage={1}
      totalPages={4}
    />
  )
}
