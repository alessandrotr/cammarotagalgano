export const allTeamQuery = `*[_type == "teamMember"] | order(order asc){
  _id,
  name,
  slug,
  role,
  photo,
  specializations,
  email,
  linkedin,
  bio
}`;
