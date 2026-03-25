export const allTestimonialsQuery = `*[_type == "testimonial"]{
  _id,
  name,
  company,
  quote,
  rating,
  photo
}`;
