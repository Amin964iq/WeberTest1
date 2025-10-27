# Supabase Database Setup Guide for Form Submissions

This guide will help you set up Supabase to store form submissions from your Weber inquiry form.

## Step 1: Create a Supabase Project

1. Go to **https://supabase.com** and sign up or log in
2. Click **"New Project"**
3. Fill in the project details:
   - **Name**: weber-inquiries (or your preferred name)
   - **Database Password**: Create a strong password (you'll need this)
   - **Region**: Choose a region close to your users
   - Click **"Create new project"**
4. Wait for the project to be created (2-3 minutes)

## Step 2: Create the Inquiries Table

1. In your Supabase project, go to **SQL Editor** from the left sidebar
2. Click **"New Query"**
3. Copy and paste this SQL to create the inquiries table:

```sql
CREATE TABLE IF NOT EXISTS inquiries (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  preferred_contact TEXT,
  industry TEXT,
  description TEXT,
  service_id TEXT,
  budget_range TEXT,
  timeline TEXT,
  preferred_contact_time TEXT,
  agreed_to_privacy BOOLEAN,
  additional_comments TEXT,
  form_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index for faster queries
CREATE INDEX idx_inquiries_email ON inquiries(email);
CREATE INDEX idx_inquiries_service_id ON inquiries(service_id);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anywhere (for your form)
CREATE POLICY "Allow public inserts" ON inquiries
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow only authenticated users to read
CREATE POLICY "Allow authenticated reads" ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);
```

4. Click **"Run"** to execute the SQL
5. You should see a success message

## Step 3: Get Your Supabase Keys

1. Go to **Settings** in the left sidebar
2. Click **"API"**
3. You'll see:
   - **Project URL** (copy this)
   - **anon public** key (copy this)

4. Keep these safe! You'll need them next.

## Step 4: Add Environment Variables

1. In your project root, find or create a `.env.local` file
2. Add these environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace `your_project_url_here` and `your_anon_key_here` with the values from Step 3.

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Save the file

## Step 5: Restart Your Development Server

1. If your development server is running, stop it (Ctrl+C)
2. Run: `npm run dev`
3. The server will restart with the new environment variables loaded

## Step 6: Test the Form Submission

1. Go to your website: **http://localhost:3000** or **https://weberiq.com**
2. Click a service to open the inquiry form
3. Fill out the form with test data
4. Click "Submit"
5. You should see a success message

## Step 7: Verify Data in Supabase

1. Go to your Supabase project dashboard
2. Click **"Table Editor"** in the left sidebar
3. Select **"inquiries"** table
4. You should see your test submission as a row in the table
5. Click on a row to see all the details

## Step 8: Create a Dashboard Page (Optional - Future)

Later, you can create a page to view all inquiries. The API would look like:

```typescript
// Get all inquiries
const { data, error } = await supabase
  .from('inquiries')
  .select('*')
  .order('created_at', { ascending: false });

// Get inquiries for a specific service
const { data, error } = await supabase
  .from('inquiries')
  .select('*')
  .eq('service_id', 'web-development')
  .order('created_at', { ascending: false });
```

## Troubleshooting

### Submissions not appearing in database?

1. Check that `.env.local` has the correct keys
2. Make sure the table name is exactly `inquiries` (case-sensitive)
3. Check Supabase logs: Go to **Logs** in the sidebar and look for errors
4. Check browser console for any error messages

### Getting "permission denied" errors?

1. Make sure RLS policy allows inserts: `"Allow public inserts"`
2. Verify the policy is enabled in Supabase

### Can't find the keys?

1. Go to Supabase **Settings** > **API**
2. Make sure you're in the right project (check project name at top)
3. The keys should be under "Project API Keys"

## What's Next?

Once the database is working:

1. **Add Email Notifications**: Configure Resend or SendGrid to send emails when forms are submitted
2. **Create Admin Dashboard**: Build a page to view and manage inquiries
3. **Add More Fields**: Customize the table to capture additional information
4. **Set Up Webhooks**: Trigger actions when new inquiries arrive

## Security Notes

- The `NEXT_PUBLIC_` prefix means these keys are visible in browser (that's okay for this key)
- The anon key has limited permissions, so it can only insert, not delete or update
- Production environments should use more restrictive Row Level Security policies
- Never commit `.env.local` to Git (it's in .gitignore)

## Useful Links

- **Supabase Docs**: https://supabase.com/docs
- **SQL Editor Guide**: https://supabase.com/docs/guides/database/sql-editor
- **Row Level Security**: https://supabase.com/docs/guides/auth/row-level-security
- **JavaScript Client**: https://supabase.com/docs/reference/javascript

---

## Quick Checklist

- [ ] Supabase project created
- [ ] `inquiries` table created with SQL
- [ ] Project URL and anon key copied
- [ ] `.env.local` updated with keys
- [ ] Development server restarted
- [ ] Test form submitted successfully
- [ ] Data appears in Supabase table
- [ ] Ready to build dashboard/features!

---

If you need help, check the troubleshooting section or refer to the Supabase documentation.
