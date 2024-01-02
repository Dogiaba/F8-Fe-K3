import { useRouter } from "next/router";
import en from "../../lang/[en].js";
import vi from "../../lang/[vi].js";

const useTrans = () =>{
    const {locale} = useRouter();
    const trans = locale === 'vi' ? vi:en
    return trans;
}
export default useTrans