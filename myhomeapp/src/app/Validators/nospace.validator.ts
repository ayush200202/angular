import { FormControl } from "@angular/forms";


export class CustomValidators{
    static noSpaceValidator(control:FormControl){
        if(control.value!=null && control.value.indexOf(' ')!=-1){
            return {noSpaceError:true}
        }
        return null
    }
}