import Dropdown from 'react-dropdown';

const countries = [
  { label: 'Country 1', value: '1' },
  { label: 'Country 2', value: '2' },
];
export const CheckoutStep1 = ({ onNext }) => {
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form onClick={(e) => e.preventDefault()}>
          <div className='checkout-form__item'>
            <h4>Thông tin khách hàng</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Tên'
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
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                />
              </div>
            </div>
          </div>
          {/* <div className='checkout-form__item'>
            <h4>Thông tin giao hàng</h4>

            <div className='box-field__row'>
            <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Số điện thoại'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nhập tỉnh'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Quận/huyện'
                />
              </div>
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Phường xã'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Địa chỉ chi tiết'
                />
              </div>
            </div>
          </div> */}
          <div className='checkout-form__item'>
            <h4>Ghi chú</h4>
            <div className='box-field box-field__textarea'>
              <textarea
                className='form-control'
                placeholder='Ghi chú'
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
            <button onClick={onNext} className='btn btn-icon btn-next'>
              next <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};
