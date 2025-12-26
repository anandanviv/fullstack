import React from 'react'
import './Testimonials.css'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const items = [
  {
    name: 'Stacy',
    text: `Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.`,
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60'
  },
  {
    name: 'Tiffany',
    text: `I ordered 5 shirts from them and received them in no time. The customer support was awesome!`,
    img: 'https://images.unsplash.com/photo-1545996124-1b1f3f17a0d9?auto=format&fit=crop&w=400&q=60'
  },
  {
    name: 'James',
    text: `I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.`,
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=60'
  }
]

export default function Testimonials({ data = items }){
  return (
    <section className="testimonials-section">
      <Typography variant="h5" component="h2" className="testimonials-title">
        Testimonials
      </Typography>

      <div className="testimonials-list">
        {data.map((t, idx) => (
          <Box key={idx} className="testimonial">
            <div className="avatar-wrap">
              <Avatar alt={t.name} src={t.img} className="testimonial-avatar" />
            </div>

            <div className="testimonial-content">
              <FormatQuoteIcon className="quote-icon" />
              <Typography className="testimonial-text">{t.text}</Typography>
              <Typography className="testimonial-name">{t.name}</Typography>
            </div>
          </Box>
        ))}
      </div>
    </section>
  )
}
