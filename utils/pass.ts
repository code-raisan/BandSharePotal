import { createHash } from "crypto";

export default {
  passauth: (password: string, hash: string) => createHash("sha1").update(password).digest("hex") === hash,
  hash: (password: string) => createHash("sha1").update(password).digest("hex")
}
