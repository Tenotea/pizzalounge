import AppButton from "../../atoms/app-button/AppButton";
import ICNext from '../../../assets/icons/ic-arrow-right.svg'
import ICPrevious from '../../../assets/icons/ic-arrow-left.svg'
import { PaginationProps } from "./Pagination.d";
import './Pagination.scss'
export default function Pagination ({currentPage, totalPages}: PaginationProps) {
  return (
    <section id="pagination">
      <AppButton 
        rtl
        icon={ICPrevious}
        disabled
      >
        Previous
      </AppButton>

      <span className="page-tracker">
        Page {currentPage} of {totalPages}
      </span>

      <AppButton
        icon={ICNext}
      >
        Next
      </AppButton>
    </section>
  )
}