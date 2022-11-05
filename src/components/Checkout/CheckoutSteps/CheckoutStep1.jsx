import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

export const CheckoutStep1 = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { cart } = useContext(CartContext);

  const handleNext = (data) => {
    const orderLineItems = cart.map((item) => (
      {
        quantity: item.quantity,
        variant: {
          productName: item?.variant?.productName,
          sku: item?.variant?.sku
        }
      }
    ))
    const orderInfo = {
      customer: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber 
      },
      note: data.note,
      orderLineItems
    }
    onNext(orderInfo);
  }

  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form onSubmit={handleSubmit((data) => handleNext(data))}>
          <div className='checkout-form__item'>
            <h4>Thông tin khách hàng</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Tên'
                {...register('name')}
              />
            </div>
            {/* <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your last name'
              />
            </div> */}
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Số điện thoại'
                  {...register('phoneNumber')}
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  {...register('email')}
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Thông tin giao hàng</h4>

            <div className='box-field__row'>
            <div className='box-field'>
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nhập tỉnh'
                  {...register('province')}
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Quận/huyện'
                  {...register('district')}
                />
              </div>
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Phường xã'
                  {...register('ward')}
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Địa chỉ chi tiết'
                  {...register('addressDetail')}
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Ghi chú</h4>
            <div className='box-field box-field__textarea'>
              <textarea
                className='form-control'
                placeholder='Ghi chú'
                {...register('note')}
              ></textarea>
            </div>
            {/* <label className='checkbox-box checkbox-box__sm'>
              <input type='checkbox' />
              <span className='checkmark'></span>
              Create an account
            </label> */}
          </div>
          <div className='checkout-buttons'>
            {/* <button className='btn btn-grey btn-icon'>
              {' '}
              <i className='icon-arrow'></i> back
            </button> */}
            <button type="submit" className='btn btn-icon btn-next'>
              Tiếp tục <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};
