import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useSearchContext } from '../../../state/search.context'

const Svg = styled.svg``

const LogoWrapper = styled.div`
  width: 154.4px;
  height: 40.1px;
  object-fit: contain;
  cursor: pointer;
`

export const Logo = () => {
  const { setCurrentPage, setCurrentSearch } = useSearchContext()
  const history = useHistory()

  const onClick = () => {
    setCurrentSearch('')
    setCurrentPage(1)
    history.push('/')
  }

  return (
    <LogoWrapper onClick={onClick} title="built by Protofire">
      <Svg
        fill="none"
        width="154.4"
        height="40.1"
        viewBox="0 0 154.371 40.117"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="prefix__filecoin-logo" transform="translate(-.002 .999)">
          <g id="prefix__Group_2867" data-name="Group 2867" transform="translate(.002 -.999)">
            <path
              id="prefix__Path_2799"
              fill="#42c1ca"
              d="M39.786 22.918A20 20 0 1 1 22.919.217a20 20 0 0 1 16.866 22.7"
              data-name="Path 2799"
              transform="translate(-.002 -.001)"
            />
          </g>
          <path
            id="prefix__Path_2800"
            fill="#fefefe"
            d="M53.63 24.324C49.8 21.905 47.066 27.233 47 27.4a23.468 23.468 0 0 0-1.592 4.891l-4.984-.739-.2 1.346 4.923.727c-.138.7-.205 1.155-.205 1.155l-.27 1.478h.015l-.018.088-4.869-.722-.182 1.355 4.826.7c-1.27 6.4-2.208 8.333-3.152 9.382a1.3 1.3 0 0 1-2.231-.49 1.332 1.332 0 0 0-1.378-.976c-.255-.023-1.443.742.416 1.918 3.812 2.422 6.565-2.909 6.629-3.07A40.4 40.4 0 0 0 46.67 38l5.017.742.2-1.343-4.94-.71c.135-.7.205-1.155.205-1.155l.243-1.484h-.015l.015-.088 4.885.721.185-1.346-4.826-.721c1.27-6.4 1.859-6.776 2.8-7.837a1.3 1.3 0 0 1 2.231.49 1.343 1.343 0 0 0 1.39.976c.255.026 1.44-.742-.419-1.918"
            data-name="Path 2800"
            transform="translate(-26.203 -16.747)"
          />
          <path
            id="prefix__Path_2801"
            fill="#fff"
            fillRule="evenodd"
            d="M193.8 35.483h-8.471v-6.926h8.746l.2-2.111H182.91v20.548h2.422v-9.541h8.468zm5.659-9.036h-2.308v2.7h2.308zm0 5.459h-2.308v15.088h2.308zm6.157-5.656l-2.308.252v14.042c0 5.008.085 6.726 3.812 6.726a9.535 9.535 0 0 0 1.548-.17l-.141-1.8c-.7.056-.9.085-1.237.085-1.577 0-1.662-1.014-1.662-4.307V26.25zm11.259 21.081c-4.3 0-6.923-3.067-6.923-7.916 0-4.5 2.7-7.77 6.641-7.881 3.744 0 6.081 2.841 6.081 7.289 0 .226-.029.789-.029 1.041h-10.321c0 3.407 2 5.489 4.644 5.489a8.318 8.318 0 0 0 4.785-1.519l.7 1.689a8.428 8.428 0 0 1-5.574 1.809zm-4.468-9.063h8.057c0-3.208-1.607-4.841-3.859-4.841s-3.944 1.886-4.196 4.841zm23.785 7.685a6.121 6.121 0 0 1-4.081 1.378c-4.691 0-7.263-3.686-7.263-7.881s2.73-7.916 7.233-7.916a5.978 5.978 0 0 1 4.1 1.322l-.586 1.633a6.351 6.351 0 0 0-3.545-1.044c-2.759 0-4.87 2.563-4.87 6.052s2.026 5.94 5.037 5.94a6.06 6.06 0 0 0 3.407-1.126l.563 1.633zm13.426-6.474c0-3.225-1.173-6.025-4.589-6.025-3.225 0-4.726 2.985-4.726 6.052s1.489 5.94 4.791 5.94 4.524-2.9 4.524-5.967zm2.393-.029c0 4.166-2.448 7.881-6.981 7.881s-7.093-3.518-7.093-7.852 2.589-7.937 7.157-7.937c4.606 0 6.918 3.574 6.918 7.908zm5.544-13h-2.307v2.7h2.307zm0 5.459h-2.307v15.085h2.307zm10.977-.364a6.805 6.805 0 0 0-5.374 2.589l-.2-2.225h-2l.056 3.653v11.432h2.307v-10.3a4.969 4.969 0 0 1 4.691-3.178c2.785 0 2.956 2 2.956 5.911v7.57h2.307v-9.039c.017-4.223-1.419-6.416-4.741-6.416z"
            data-name="Path 2801"
            transform="translate(-118.908 -27.249)"
          />
          <path
            id="prefix__Path_2803"
            fill="#cfe0ff"
            d="M.481-4.537A4.511 4.511 0 0 0 5.1.078a4.3 4.3 0 0 0 4.2-2.7H7.514A2.524 2.524 0 0 1 5.1-1.209 3.049 3.049 0 0 1 2-4.537a3.038 3.038 0 0 1 3.1-3.315 2.524 2.524 0 0 1 2.414 1.417H9.3a4.307 4.307 0 0 0-4.2-2.717A4.519 4.519 0 0 0 .481-4.537zM11.024 0h1.482v-9.035h-1.482zm6.383-9.035h-2.951V0h2.951c2.9 0 4.8-1.7 4.8-4.485s-1.901-4.55-4.8-4.55zm-1.469 7.826v-6.617h1.469a3.015 3.015 0 0 1 3.276 3.341 2.972 2.972 0 0 1-3.276 3.276zm10.621-3.328A4.511 4.511 0 0 0 31.174.078a4.3 4.3 0 0 0 4.2-2.7h-1.782a2.524 2.524 0 0 1-2.418 1.417 3.049 3.049 0 0 1-3.094-3.332 3.038 3.038 0 0 1 3.094-3.315 2.524 2.524 0 0 1 2.418 1.417h1.781a4.307 4.307 0 0 0-4.2-2.717 4.519 4.519 0 0 0-4.614 4.615zM37.1 0h1.482v-4a1.736 1.736 0 0 1 1.807-1.989c1.079 0 1.794.676 1.794 1.989v4h1.469v-4.225a2.762 2.762 0 0 0-2.845-3.055 2.839 2.839 0 0 0-2.223.949V-9.62H37.1zm11.455-6.032a1.86 1.86 0 0 1 2 1.807h-3.963a1.951 1.951 0 0 1 1.963-1.807zm3.354 3.9h-1.6a1.734 1.734 0 0 1-1.69 1 1.97 1.97 0 0 1-2.041-1.9h5.473a4.572 4.572 0 0 0 .052-.728 3.341 3.341 0 0 0-3.483-3.52 3.43 3.43 0 0 0-3.575 3.692A3.475 3.475 0 0 0 48.62.117a3.273 3.273 0 0 0 3.289-2.249zm1.157-1.456a3.426 3.426 0 0 0 3.51 3.705 3.217 3.217 0 0 0 3.3-2.379h-1.6a1.636 1.636 0 0 1-1.7 1.131c-1.2 0-1.989-.884-1.989-2.457s.793-2.444 1.989-2.444a1.674 1.674 0 0 1 1.7 1.131h1.6a3.116 3.116 0 0 0-3.3-2.379 3.422 3.422 0 0 0-3.51 3.692zM61.36 0h1.482v-3.081L65.494 0h2l-3.3-3.575 3.3-3.588h-2.052l-2.6 3.133v-5.59H61.36zm10.218-6.032a1.86 1.86 0 0 1 2 1.807h-3.963a1.951 1.951 0 0 1 1.963-1.807zm3.354 3.9h-1.6a1.734 1.734 0 0 1-1.69 1 1.97 1.97 0 0 1-2.041-1.9h5.473a4.572 4.572 0 0 0 .052-.728 3.341 3.341 0 0 0-3.483-3.52 3.43 3.43 0 0 0-3.575 3.692A3.475 3.475 0 0 0 71.643.117a3.273 3.273 0 0 0 3.289-2.249zm3.133-1.638c0-1.521.676-1.976 1.768-1.976h.377V-7.28a2.333 2.333 0 0 0-2.145 1.157v-1.04h-1.482V0h1.482z"
            data-name="Path 2803"
            opacity="0.3"
            transform="translate(63.521 39.001)"
          />
        </g>
      </Svg>
    </LogoWrapper>
  )
}
