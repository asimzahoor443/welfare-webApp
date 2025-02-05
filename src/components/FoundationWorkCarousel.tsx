import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const FoundationWorkCarousel = () => {
  const achievements = [
    {
      title: 'Electricity & Water Bills',
      img: '/electricity-water.png', // Replace with your image path
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Medical Assistance',
      img: '/medical.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Donor Requests',
      img: '/donor.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Financial Assistance',
      img: '/financial.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Ration Support',
      img: '/ration.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Marriage Assistance',
      img: '/marriage.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Education',
      img: '/education.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Water Supply',
      img: '/water.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-12 px-4">
      <Carousel
        opts={{
          align: 'start',
          slidesToScroll: 3,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-2">
          {achievements.map((achievement, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 pl-2 md:basis-1/3 lg:basis-1/3" // 3 items per view
            >
              <div className="p-6 bg-white rounded-xl shadow-lg h-full">
                <h3 className="text-xl font-bold text-center mb-4 pt-2">
                  {achievement.title}
                </h3>
                <div className="flex justify-center mb-4">
                  <img
                    src={achievement.img}
                    alt={achievement.title}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <p className="text-gray-600 text-center text-sm">
                  {achievement.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default FoundationWorkCarousel;
