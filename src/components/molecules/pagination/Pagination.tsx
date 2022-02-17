import AppButton from "../../atoms/app-button/AppButton";
import ICNext from '../../../assets/icons/ic-arrow-right.svg'
import ICPrevious from '../../../assets/icons/ic-arrow-left.svg'
import './Pagination.scss'
export default function Pagination () {
  return (
    <section id="pagination">
      <AppButton 
        rtl
        icon={ICPrevious}
      >
        Previous
      </AppButton>

      <span className="page-tracker">
        Page 1 of 4
      </span>

      <AppButton
        icon={ICNext}
      >
        Next
      </AppButton>
    </section>
  )
}