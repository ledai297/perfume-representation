import { Card } from './Card/Card';

export const Advantage = () => {
  const advantagesData = [
    {
      title: "Chính hãng",
      body: ""
    },
    {
      title: "3 ngày đổi trả",
      body: ""
    },
    {
      title: "Tư vấn 24/7",
      body: ""
    },
    {
      title: "Quà tặng",
      body: ""
    }
  ]
  const advantages = [...advantagesData];
  return (
    <>
      {/* <!-- BEGIN ADVANTAGES --> */}
      <div className='advantages'>
        <div className='wrapper'>
          <div className='advantages-items'>
            {advantages.map((advantage, index) => (
              <Card key={index} advantage={advantage} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- ADVANTAGES EOF   --> */}
    </>
  );
};
