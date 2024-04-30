export class CodeModel {
  code: string
  constructor(response: any) {
    this.code = response.code
  }
}
