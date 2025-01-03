import { cn } from "@/lib/utils"
import ScrollAnimatedDiv from "./scroll-animated-div"

export const Container = ({className, children, triggerAnim = true, ...props}) => {
    return triggerAnim ? (
        <ScrollAnimatedDiv className={cn("w-[85vw] max-w-screen-2xl mx-auto my-16", className)} {...props}>
        {children}
    </ScrollAnimatedDiv>
    ) : (
        <section className={cn("w-[85vw] max-w-screen-2xl mx-auto my-16", className)} {...props}>
            {children}
        </section>
    )
}