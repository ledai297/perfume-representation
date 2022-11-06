import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import { StorageUtils } from 'utils/StorageUtils';
import { CheckoutOrders } from './CheckoutOrder/CheckoutOrders';
import { CheckoutStep1 } from './CheckoutSteps/CheckoutStep1';
import { CheckoutStep3 } from './CheckoutSteps/CheckoutStep3';
import router from 'next/router';
import NotificationService from 'service/notification/NotificationService';

const detailBlocks = [
  {
    step: 'Step 1',
    title: 'Chi tiết đơn hàng',
    icon: 'icon-step1',
  },
  // {
  //   step: 'Step 2',
  //   title: 'Payment method',
  //   icon: 'icon-step2',
  // },
  {
    step: 'Bước 2',
    title: 'Hoàn tất!',
    icon: 'icon-step3',
  },
];

export const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { cart } = useContext(CartContext);

  const handleNext = async (order) => {
    try {
      await NotificationService.notifyNewOrder(order);
    } catch (error) {

    } finally {
      setActiveStep(activeStep + 1);
    }
  };

  useEffect(() => {
    const cart = StorageUtils.getCart();

    if(!cart || cart?.length == 0) {
      router.push("/")
    }
  }, []);

  useEffect(() => {
    if(activeStep === 2) {
      StorageUtils.resetCart();
    }
  }, [activeStep])

  return (
    <>
      <div className='wrapper'>
        {/* <!-- BEGIN DETAIL MAIN BLOCK --> */}
        <div className='detail-block__items'>
          {detailBlocks.map((block, index) => (
            <div
              key={index}
              className={`detail-block__item ${
                activeStep <= index && 'detail-block__item-inactive'
              }`}
            >
              <div className='detail-block__item-icon'>
                <img
                  src={
                    activeStep <= index
                      ? '/assets/img/main-text-decor2.svg'
                      : '/assets/img/main-text-decor.svg'
                  }
                  className='js-img'
                  alt=''
                />
                <i className={block.icon}></i>
              </div>
              <div className='detail-block__item-info'>
                <h6>{block.step}</h6>
                {block.title}
              </div>
            </div>
          ))}
        </div>
        {/* <!-- DETAIL MAIN BLOCK EOF --> */}
      </div>

      <div>
        Tiếp tục mua hàng
      </div>

      {/* <!-- BEGIN CHECKOUT --> */}
      <div className={`checkout ${activeStep == 2 && 'checkout-step2'}`}>
        <div className='wrapper'>
          <div className='checkout-content'>
            {(() => {
              switch (activeStep) {
                case 1:
                  return <CheckoutStep1 onNext={handleNext} />;
                // case 2:
                //   return (
                //     <CheckoutStep2 onNext={handleNext} onPrev={handlePrev} />
                //   );
                case 2:
                  return <CheckoutStep3 />;

                default:
                  return null;
              }
            })()}
            <div className='checkout-info'>
              <CheckoutOrders cart={cart} />
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- CHECKOUT EOF   --> */}
    </>
  );
};
