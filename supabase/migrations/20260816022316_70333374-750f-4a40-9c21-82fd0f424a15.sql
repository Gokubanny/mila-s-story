CREATE POLICY "No direct access for authenticated and anon"
ON public.contact_submissions
FOR ALL
TO authenticated, anon
USING (false)
WITH CHECK (false);