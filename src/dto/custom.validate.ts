import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";

export function IsIntString(property ? : string, validationOptions ? : ValidationOptions) {
  
  return function (object: Object, propertyName: string) {
    registerDecorator({
        name: "isLongerThan",
        target: object.constructor,
        propertyName: propertyName,
        constraints: [property],
        options: Object.assign({ message: `${propertyName} 必须是整数` }, validationOptions),
        validator: {
          validate(value: any, args: ValidationArguments) {
            const [relatedPropertyName] = args.constraints;
            const relatedValue = (args.object as any)[relatedPropertyName];

            if (value === undefined || value === null || !/^\d+$/.test(value.toString())) {
              return false
            }
            return true
          }
      }
    });
  }
};