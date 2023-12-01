import { SectionWrap } from "./Section.styled"

export const Section = ({title, children}) => {
    return (
        <SectionWrap>
            <h1>{title}</h1>
            {children}
        </SectionWrap>
        )


}