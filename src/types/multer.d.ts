export = index;
declare function index(options: any): any;
declare namespace index {
  class MulterError {
    constructor(code: any, field: any);
    name: any;
    message: any;
    code: any;
    field: any;
  }
  function diskStorage(opts: any): any;
  function memoryStorage(opts: any): any;
}
