import { styled } from '@mui/material'

const LinkStyled = styled('a')(() => ({
  display: 'flex',
  alignItems: 'center',
  height: 64,
  width: 180,
  overflow: 'hidden',
}))

export default function Logo() {
  return (
    <LinkStyled href="/">
      <img
        src="https://toppng.com/uploads/preview/no-symbol-11549788030lopdlchkve.png"
        alt="Logo"
        style={{ display: 'block', height: '100%', width: 'auto' }}
      />
    </LinkStyled>
  )
}
