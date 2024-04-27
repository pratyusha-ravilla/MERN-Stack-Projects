
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
   <div>
    <div>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        About of
        <span className="text-irisBlueColor font-bold text-[24px] leading-9">
        Dr.Saleh Mahmud
        </span>
      </h3>
      <p className="text__para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim temporibus voluptatem est possimus omnis pariatur quibusdam laborum quidem, maxime esse molestiae sit veniam harum eveniet quia quo magni velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, fugit consectetur quod beatae et dolor voluptas dolore officia, autem voluptates debitis doloremque perferendis praesentium, cupiditate quia reprehenderit repellat. Blanditiis, sint.
      </p>
    </div>

    <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
         Education
      </h3>

      <ul className="pt-4 md:p-5">
      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
        <div>
          <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
          {formateDate('11-14-2014')}- {formateDate('12-04-2016')}
          </span>
          <p className="text-[16px] leading-6 font-medium text-textColor">
            PHD in Neurology
          </p>
        </div>
        <p className="text-[14px] leading-5 font-medium text-textColor">
          New Apollo Hospital, Hyderabad
        </p>
      </li>

      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
        <div>
          <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
          {formateDate('12-08-2010')} - {formateDate('02-05-2014')}
          </span>
          <p className="text-[16px] leading-6 font-medium text-textColor">
            PHD in Neurology
          </p>
        </div>
        <p className="text-[14px] leading-5 font-medium text-textColor">
          New Apollo Hospital, Hyderabad
        </p>
      </li>
      </ul>
    </div>
    
    <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
         Experience
      </h3>

      <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
      <li className="p-4 rounded bg-[#fff9ea]">
      <span className="text-yellowColor text-[15px] leading-6 font-semibold">
      {formateDate('11-14-2014')}- {formateDate('12-04-2016')}
      </span>
      <p className="text-[16px] leading-6 font-medium text-textColor">
            Sr. Neurologist
          </p>
          <p className="text-[14px] leading-5 font-medium text-textColor">
          New Apollo Hospital, Hyderabad
        </p>
        </li>

        <li className="p-4 rounded bg-[#fff9ea]">
      <span className="text-yellowColor text-[15px] leading-6 font-semibold">
      {formateDate('11-14-2014')}- {formateDate('12-04-2016')}
      </span>
      <p className="text-[16px] leading-6 font-medium text-textColor">
            Sr. Neurologist
          </p>
          <p className="text-[14px] leading-5 font-medium text-textColor">
          New Apollo Hospital, Hyderabad
        </p>
        </li>
      </ul>
      </div>


   </div>
  )
}

export default DoctorAbout