import { createClient } from "contentful"
export default createClient({
  space: "eeyyxug5qk77",
  accessToken: process.env.GATSBY_API_KEY,
})
