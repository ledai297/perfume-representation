import Link from 'next/link';
import productData from 'data/product/product';
import NotificationService from 'service/notification/NotificationService';
import { useForm } from "react-hook-form";
import NotificationService from 'service/notification/NotificationService';
import { useState } from 'react';

export const ProfileAside = () => {
  const recentlyViewed = [...productData].slice(0, 3);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ subcribeSucessfullly, setSubcribeSuccessfully ] = useState(false);

  const subcribe = async (values) => {
    try {
      const data = {
        name: '',
        phoneNumber: values.phoneNumber,
        email: ''
      }
      await NotificationService.subcribe(data);
      setSubcribeSuccessfully(true);
    } catch(error) {

    }
  }

  return (
    <>
      <form className='profile-aside' onSubmit={handleSubmit(subcribe)}>
        <div className='profile-aside__subscribe'>
          <h3>Nhận tư vấn</h3>
          <div className='box-field'>
            <input
              {...register("phoneNumber", {required: "Bạn chưa điền số điện thoại", pattern:{ value: /^(0|[1-9]\d*)(\.\d+)?$/}, message: 'Số điện thoại bạn nhập không hợp lệ' })}
              className='form-control'
              placeholder='Số điện thoại'
            />
            {errors.phoneNumber && <p role="alert" className="form-item-error">{errors.phoneNumber?.message}</p>}
            {subcribeSucessfullly && <p role="alert" className="subcribe-sucessfullly">Cảm ơn bạn đã đăng ký, mình sẽ liên lạc lại với bạn sau nha!!!</p>}
          </div>
          <button onClick={subcribe} className='btn'>
            Nhận tư vấn
          </button>
          <img
            src='/assets/img/subscribe-img-decor-sm.png'
            className='js-img'
            alt=''
          />
        </div>
        <div className='profile-aside__viewed'>
          <h5>You have viewed</h5>
          {recentlyViewed.map((product) => (
            <div key={product.id} className='profile-aside__viewed-item'>
              <Link href={`/product/${product.id}`}>
                <a className='profile-aside__viewed-item-img'>
                  <img src={product.image} className='js-img' alt='' />
                </a>
              </Link>
              <div className='profile-aside__viewed-item-info'>
                <Link href={`/product/${product.id}`}>
                  <a className='profile-aside__viewed-item-title'>
                    {product.name}
                  </a>
                </Link>
                <span className='profile-aside__viewed-item-price'>
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          className='profile-aside__discount js-img'
          style={{ backgroundImage: `url('/assets/img/discount-bg-sm.jpg')` }}
        >
          <div className='profile-aside__discount-title'>
            Get Your
            <br />
            <span>50%</span> Off
          </div>
          <Link href='/shop'>
            <a className='btn'>
              get now!
            </a>
          </Link>
        </div>
      </form>
    </>
  );
};
