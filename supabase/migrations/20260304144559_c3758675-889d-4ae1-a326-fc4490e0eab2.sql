
CREATE TABLE public.lead_captures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  risorsa_id text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.lead_captures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert lead_captures"
ON public.lead_captures
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can read lead_captures"
ON public.lead_captures
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));
