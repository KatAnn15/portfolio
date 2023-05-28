import "./Services.scss";
import services from "../../../../../../db/services.db.json";

const ServiceItem = ({
  icon,
  label,
  description,
}: {
  icon: string;
  label: string;
  description: string;
}) => (
  <div>
    <img src={`/assets/images/services/${icon}.svg`} alt='' />
    <p>{label}</p>
    <span>{description}</span>
  </div>
);

const Services = () => {
  return (
    <div className='services-container'>
      {services.map((service) => (
        <ServiceItem
          icon={service.icon}
          label={service.label}
          description={service.description}
          key={service.label}
        />
      ))}
    </div>
  );
};

export default Services;
