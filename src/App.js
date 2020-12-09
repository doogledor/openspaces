import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container-2">
        <span>
          part of the Container for #2 with overflow, it's chopped off
        </span>
        <Anchor>ANCHOR</Anchor>
      </div>
      <div className="container-3">
        part of the Container for #3
        <Anchor>ANCHOR</Anchor>
        <Anchor>ANCHOR item 2</Anchor>
        <Anchor>ANCHOR item 3</Anchor>
        <Anchor>ANCHOR item 4</Anchor>
      </div>
    </div>
  )
}

/* --------------------
managed by the user, separte from tooltip
 ----------------------*/
function Anchor(props) {
  const contentRef = useRef(null)

  return (
    <div ref={contentRef} className="anchor">
      <div className="content">{props.children}</div>
      <Toolip className="toolip" targetRef={contentRef}>
        TOOLIP
      </Toolip>
    </div>
  )
}
/* --------------------

 ----------------------*/
function Toolip({ targetRef, children }) {
  const tooltipRef = useRef(null)
  const [state, setState] = useState({
    style: { left: 0, top: 0, visibility: 'hidden' },
  })
  const [visibility, setVisibility] = useState({
    visible: false,
  })

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.addEventListener('mouseover', mouseOver)
      targetRef.current.addEventListener('mouseout', mouseOut)
      targetRef.current.addEventListener('mouseleave', mouseOut)
      targetRef.current.addEventListener('wheel', onWheel)
    }
    return () => {
      if (targetRef.current) {
        targetRef.current.removeEventListener('mouseover', mouseOver)
        targetRef.current.removeEventListener('mouseout', mouseOut)
        targetRef.current.removeEventListener('mouseleave', mouseOut)
        targetRef.current.removeEventListener('wheel', onWheel)
      }
    }
  }, [targetRef])

  useEffect(() => {
    if (!visibility.visible || !tooltipRef.current) return
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const targetBbox = targetRef.current.getBoundingClientRect()
    setState({
      style: {
        left: `${Math.floor(targetBbox.x + targetBbox.width + 10)}px`,
        top: `${Math.floor(
          targetBbox.y + targetBbox.height / 2 - tooltipRect.height / 2,
        )}px`,
        visibility: 'visible',
      },
    })
  }, [visibility])

  function onWheel(e) {
    setVisibility({ visible: false })
  }

  function mouseOver(e) {
    e.preventDefault()
    e.stopPropagation()
    setVisibility({ visible: true })
    return false
  }

  const mouseOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setVisibility({ visible: false })
    return false
  }

  if (!visibility.visible) return null

  return (
    <div
      ref={tooltipRef}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      className="toolip"
      style={state.style}
    >
      {children}
    </div>
  )
}

export default App
