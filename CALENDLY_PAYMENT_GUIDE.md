# Calendly Payment Integration Guide
## Stripe & Payment Options

**Date:** 2024  
**Project:** Personal House & Pet Sitter Website

---

## Calendly Payment Options

### ✅ YES - Calendly Has Payment Integration

Calendly **does support payment collection**, but with important caveats:

### 1. Calendly's Native Payment Feature

**How it works:**
- Calendly has built-in payment collection through **Stripe** and **PayPal**
- Available on **Professional plan ($10/month)** and above
- Payments are processed **directly within Calendly** during booking
- Users pay before or after booking confirmation (your choice)

**Setup Process:**
1. Upgrade to Calendly Professional plan ($10/month) or higher
2. Connect your Stripe account in Calendly settings
3. Enable "Collect Payments" for your event type
4. Set payment amount and when payment is collected (before/after booking)

**Pros:**
- ✅ Seamless - payment happens in the booking flow
- ✅ No additional development needed
- ✅ Handles all payment processing
- ✅ Automatic receipts sent to clients
- ✅ Works in iframe embed

**Cons:**
- ⚠️ Requires paid Calendly plan ($10+/month)
- ⚠️ Payment processed through Calendly (not directly to your Stripe)
- ⚠️ Calendly takes a small processing fee on top of Stripe fees
- ⚠️ Less control over payment experience

**Cost Breakdown:**
- Calendly Professional: **$10/month**
- Stripe processing fees: **2.9% + $0.30** per transaction
- Calendly may add additional fees (check current pricing)

---

### 2. Alternative: Separate Payment Flow (Recommended for Cost Savings)

**How it works:**
- Use **Calendly Free tier** for scheduling (iframe embed)
- After booking confirmation, redirect to payment page on your Next.js site
- Collect payment via **Stripe** directly on your site
- Send confirmation email

**Implementation:**
```typescript
// After Calendly booking, redirect to:
// /payment?bookingId=xxx&amount=xxx

// Payment page with Stripe Checkout or Stripe Elements
import { loadStripe } from '@stripe/stripe-js'
```

**Pros:**
- ✅ **Save $10/month** (use Calendly free tier)
- ✅ **Lower fees** - Only Stripe fees (no Calendly markup)
- ✅ **Full control** - Customize payment experience
- ✅ **Better branding** - Payment happens on your site
- ✅ **More flexible** - Can add payment plans, deposits, etc.

**Cons:**
- ⚠️ Requires development (Stripe integration)
- ⚠️ Two-step process (book, then pay)
- ⚠️ Slightly more friction

**Cost Breakdown:**
- Calendly Free: **$0/month**
- Stripe processing fees: **2.9% + $0.30** per transaction
- Development time: One-time setup

---

### 3. Hybrid Approach: Calendly Webhooks + Stripe

**How it works:**
- User books on Calendly (free tier)
- Calendly sends webhook to your Next.js API
- Your API creates Stripe Checkout session
- Redirect user to Stripe payment page
- After payment, send confirmation

**Pros:**
- ✅ Automated flow
- ✅ Use Calendly free tier
- ✅ Full Stripe control
- ✅ Can customize payment experience

**Cons:**
- ⚠️ More complex setup
- ⚠️ Requires backend API
- ⚠️ Webhook handling needed

---

## Recommendation for Your Use Case

### Option A: Calendly Native Payments (Simplest)
**Best if:** You want zero development, seamless experience, and don't mind $10/month

**Setup:**
1. Upgrade to Calendly Professional ($10/month)
2. Connect Stripe account
3. Enable payments on event type
4. Done! ✅

**Total Cost:** $10/month + Stripe fees (2.9% + $0.30 per transaction)

---

### Option B: Separate Payment Page (Cost-Effective) ⭐ RECOMMENDED
**Best if:** You want to save money and have more control

**Setup:**
1. Use Calendly Free tier
2. Build payment page with Stripe Checkout
3. Redirect after booking confirmation
4. Send confirmation email

**Total Cost:** $0/month + Stripe fees (2.9% + $0.30 per transaction)

**Implementation Steps:**
```typescript
// 1. Install Stripe
npm install @stripe/stripe-js @stripe/react-stripe-js

// 2. Create payment page component
// pages/payment.tsx or app/payment/page.tsx

// 3. Use Stripe Checkout (easiest) or Stripe Elements (more control)
```

---

## Stripe Integration Options

### Option 1: Stripe Checkout (Easiest) ⭐
- Pre-built payment page hosted by Stripe
- Redirects to Stripe-hosted page
- Minimal code required
- Best for: Quick setup, simple payments

### Option 2: Stripe Elements (More Control)
- Custom payment form on your site
- Full design control
- More code required
- Best for: Branded experience, custom flows

### Option 3: Stripe Payment Links (Simplest)
- Generate payment link in Stripe dashboard
- Send link via email after booking
- No code needed
- Best for: Manual process, low volume

---

## Payment Flow Comparison

### Flow A: Calendly Native Payments
```
User → Calendly iframe → Select time → Enter details → Pay in Calendly → Confirmed
```
**Pros:** Seamless, one flow  
**Cons:** $10/month, less control

### Flow B: Separate Payment (Recommended)
```
User → Calendly iframe → Select time → Enter details → Booking confirmed → 
Redirect to payment page → Pay on your site → Confirmed
```
**Pros:** Free, full control, better branding  
**Cons:** Two steps, requires development

---

## Implementation Recommendation

### For MVP (Launch Quickly):
**Use:** Calendly Free + Stripe Payment Links
- Book on Calendly
- Manually send Stripe payment link via email
- Simple, zero code
- Upgrade to automated flow later

### For Production (Best UX):
**Use:** Calendly Free + Stripe Checkout Page
- Book on Calendly
- Auto-redirect to Stripe Checkout
- Automated, professional
- One-time development

### For Maximum Simplicity:
**Use:** Calendly Professional + Native Payments
- Everything in one flow
- Zero development
- Pay $10/month

---

## Cost Comparison

| Option | Monthly Cost | Transaction Fees | Development Time |
|--------|-------------|------------------|------------------|
| **Calendly Native** | $10/month | 2.9% + $0.30 + Calendly fee | 0 hours |
| **Separate Payment** | $0/month | 2.9% + $0.30 | 2-4 hours |
| **Payment Links (Manual)** | $0/month | 2.9% + $0.30 | 0 hours |

**Example:** 10 bookings/month at $100 each
- **Calendly Native:** $10 + ~$32 fees = **$42/month**
- **Separate Payment:** $0 + ~$32 fees = **$32/month**
- **Savings:** $10/month + better control

---

## Next Steps

1. **Decide on approach:**
   - Simple & willing to pay $10/month? → Calendly Native
   - Want to save money & have control? → Separate Payment Page

2. **If Separate Payment:**
   - Set up Stripe account
   - Install Stripe SDK in Next.js
   - Create payment page component
   - Add redirect after Calendly booking

3. **If Calendly Native:**
   - Upgrade to Professional plan
   - Connect Stripe account
   - Enable payments in event settings

---

## Stripe Setup Checklist

- [ ] Create Stripe account
- [ ] Get API keys (test & live)
- [ ] Install Stripe SDK: `npm install @stripe/stripe-js @stripe/react-stripe-js`
- [ ] Create payment page component
- [ ] Set up Server Actions/API routes for payment processing
- [ ] Test with Stripe test mode
- [ ] Add environment variables for API keys
- [ ] Set up webhook endpoint (if using webhooks)
- [ ] Test payment flow end-to-end
- [ ] Switch to live mode when ready

---

**Document Owner:** Development Team  
**Last Updated:** 2024  
**Status:** Ready for Implementation
