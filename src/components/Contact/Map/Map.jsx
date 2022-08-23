export const Map = () => {
  return (
    <div className='contacts-map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.8192357352573!2d105.76544871540172!3d20.959773195504585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452db922e2fd1%3A0x1c21db1be4bac38a!2zVmljdG9yaWEgVsSDbiBQaMO6!5e0!3m2!1svi!2s!4v1660917755778!5m2!1svi!2s'
        width='100%'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
      ></iframe>
    </div>
  );
};
