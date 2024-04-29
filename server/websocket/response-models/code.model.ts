export class CodeModel {
  code: string
  constructor(response: JSON) {
    this.code = response.code
  }
}
