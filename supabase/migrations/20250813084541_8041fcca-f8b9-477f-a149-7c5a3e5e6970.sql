-- Create download-counter table
CREATE TABLE IF NOT EXISTS public."download-counter" (
  id bigint NOT NULL DEFAULT 1,
  count bigint DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE public."download-counter" ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a download counter)
CREATE POLICY "Anyone can view download counter" 
ON public."download-counter" 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update download counter" 
ON public."download-counter" 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can insert download counter" 
ON public."download-counter" 
FOR INSERT 
WITH CHECK (true);

-- Insert initial record if it doesn't exist
INSERT INTO public."download-counter" (id, count) 
VALUES (1, 0) 
ON CONFLICT (id) DO NOTHING;