import { FilePath, pathToRoot,joinSegments,RelativeURL, transformInternalLink} from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import style from "./styles/logo.scss"

const Logo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const logoUrl = joinSegments(pathToRoot(fileData.slug!), transformInternalLink("/assets/webhexLogo.svg")) as RelativeURL
  return (

    
    <div class={classNames(displayClass, "logo")}>
      <a href={baseDir}><img src={logoUrl} /></a>
    </div>

  )
}

Logo.css = style

export default (() => Logo) satisfies QuartzComponentConstructor
