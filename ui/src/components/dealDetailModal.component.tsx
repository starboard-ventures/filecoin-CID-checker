import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { ModalWrapper } from './modalWrapper.component'
import { DealTitles, DealValue, DealValueNotAvailable } from '../utils/types'
import { DealStatusIcon } from './dealStatusIcon.component'
import { truncateStringInTheMiddle } from '../utils/deals'
import { Button } from './button.component'
import { CopyText } from './copyText.component'
import { ShareDeal } from './shareDeal.component'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  deal: Maybe<DealValue>
}

const ModalTitle = styled.div`
  width: 140px;
  height: 33px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 22px;
`

const Footer = styled.div`
  margin: 30px auto 5px auto;
`

const Dots = styled.span`
  display: block;
  background: radial-gradient(circle, rgba(207, 224, 255, 0.62) 1px, transparent 1px) repeat-x;
  background-size: 6px 39px;
  flex-grow: 10;
`

const SpanTitle = styled.span`
  padding: 6px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: #cfe0ff;
`

const SpanValue = styled.span`
  padding: 6px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: right;
  color: #ffffff;
`

const CopyTextWrapper = styled(CopyText)`
  margin-top: -2px;
`

export const DealDetailModal = (props: Props) => {
  const { onClose, isOpen, deal } = props

  if (!deal) {
    return null
  }

  return (
    <ModalWrapper isOpen={isOpen} onRequestClose={onClose}>
      <ModalTitle>
        Details <ShareDeal text={deal.DealID + ''} />
      </ModalTitle>

      <div className="row">
        <SpanTitle>{DealTitles.PieceCID}</SpanTitle>
        <Dots />
        <SpanValue title={deal.PieceCID}>
          {truncateStringInTheMiddle(deal.PieceCID, 6, 4)}
        </SpanValue>
        <CopyTextWrapper text={deal.PieceCID} title="Click to copy Piece CID" />
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.DealID}</SpanTitle>
        <Dots />
        <SpanValue>{deal.DealID}</SpanValue>
        <CopyTextWrapper text={deal.DealID + ''} title="Click to copy Deal ID" />
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.MinerID}</SpanTitle>
        <Dots />
        <SpanValue>{deal.MinerID}</SpanValue>
        <CopyTextWrapper text={deal.MinerID} title="Click to copy Miner ID" />
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.Sector}</SpanTitle>
        <Dots />
        <SpanValue>{deal.SectorNumber}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.Client}</SpanTitle>
        <Dots />
        <SpanValue>{deal.Client}</SpanValue>
        <CopyText text={deal.Client} title="Click to copy Client" />
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.PieceSize}</SpanTitle>
        <Dots />
        <SpanValue>{deal.PieceSize}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.VerifiedDeal}</SpanTitle>
        <Dots />
        <SpanValue>{deal.VerifiedDeal ? 'True' : 'False'}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.SealedCID}</SpanTitle>
        <Dots />
        <SpanValue title={deal.SealedCID}>
          {deal.SealedCID !== DealValueNotAvailable
            ? truncateStringInTheMiddle(deal.SealedCID, 6, 4)
            : deal.SealedCID}
        </SpanValue>
        {deal.SealedCID !== DealValueNotAvailable && (
          <CopyText text={deal.SealedCID} title="Click to copy Sealed CID" />
        )}
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.StartEpoch}</SpanTitle>
        <Dots />
        <SpanValue>{deal.StartEpoch}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.EndEpoch}</SpanTitle>
        <Dots />
        <SpanValue>{deal.EndEpoch}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.Expiration}</SpanTitle>
        <Dots />
        <SpanValue>{deal.Expiration}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.StoragePricePerEpoch}</SpanTitle>
        <Dots />
        <SpanValue>{deal.StoragePricePerEpoch}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.ProviderCollateral}</SpanTitle>
        <Dots />
        <SpanValue>{deal.ProviderCollateral}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.ClientCollateral}</SpanTitle>
        <Dots />
        <SpanValue>{deal.ClientCollateral}</SpanValue>
      </div>
      <div className="row">
        <SpanTitle>{DealTitles.State}</SpanTitle>
        <Dots />
        <SpanValue className="is-right is-center">
          {' '}
          <DealStatusIcon status={deal.State} />
          {deal.State}
        </SpanValue>
      </div>

      <Footer>
        <Button className="is-center" onClick={onClose}>
          Close
        </Button>
      </Footer>
    </ModalWrapper>
  )
}
