import { useForm } from "react-hook-form";
import NotificationService from 'service/notification/NotificationService';

export const Subscribe = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const subcribe = async (values) => {
    try {
      const data = {
        name: '',
        phoneNumber: values?.phoneNumber,
        email: ''
      }
      await NotificationService.subcribe(data);
    } catch(error) {

    }
  }
  return (
    <>
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <div className='subscribe'>
        <div className='wrapper'>
          <div className='subscribe-form'>
            <div className='subscribe-form__img'>
              <img
                src='/assets/img/subscribe-img.png'
                className='js-img'
                alt=''
              />
            </div>
            <form onSubmit={handleSubmit(subcribe)}>
              <h3>Nhận tư vấn</h3>
              <p>Để lại số điện thoại, đội ngũ chăm sóc khách hàng của chúng tôi sẽ liên lạc lại với bạn.</p>
              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    {...register("phoneNumber", {required: "Bạn chưa điền số điện thoại", pattern:{ value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/, message: 'Số điện thoại bạn nhập không hợp lệ'} })}
                    className='form-control'
                    placeholder='Số điện thoại'
                  />
                  {errors.phoneNumber && <p className="form-item-error">{errors.phoneNumber?.message}</p>}
                </div>
                <button type='submit' className='btn'>
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
    </>
  );
};
