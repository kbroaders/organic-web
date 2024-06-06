import { FilePath, pathToRoot,joinSegments,RelativeURL, transformInternalLink} from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const Logo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const logoUrl = joinSegments(pathToRoot(fileData.slug!), transformInternalLink("/assets/webhexLogo.svg")) as RelativeURL
  return (

    
    <div class={classNames(displayClass, "logo")}>
      <a href={baseDir}><img src={logoUrl} width="70rem" /></a>
    </div>

  )
}

Logo.css = `
.logo {
  margin: 0 1rem 0 0;
  &:hover {
    filter: brightness(130%) saturate(70%);
    -webkit-transition: 0.2s -webkit-filter linear;
    -moz-transition: 0.2s -moz-filter linear;
    -moz-transition: 0.2s filter linear;
    -ms-transition: 0.2s -ms-filter linear;
    -o-transition: 0.2s -o-filter linear;
    transition: 0.2s filter linear, 0.2s -webkit-filter linear; 
  }
}
`

export default (() => Logo) satisfies QuartzComponentConstructor
