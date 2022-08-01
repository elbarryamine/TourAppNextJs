export interface NavigationLinkProps {
  isImageIntersecting?: boolean
  item: {
    link: string
    icon?: any
    name: string
    hasImageIntersecting?: boolean
  }
}
export interface NavigationComponentProps {
  links: NavigationLinkProps['item'][]
  isImageIntersecting?: boolean
}
