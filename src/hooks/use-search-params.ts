

import  {parseAsString , useQueryState} from "nuqs"

export function useSearchParsms(key : string){
 return useQueryState(
    key,
    parseAsString.withDefault("").withOptions({clearOnDefault : true})
 )
}