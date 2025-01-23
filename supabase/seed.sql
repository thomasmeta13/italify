INSERT INTO properties (title, description, price, location, region, bedrooms, bathrooms, size_sqm, property_type, features, images, is_featured, status)
VALUES
  (
    'Tuscan Villa with Vineyard',
    'Stunning 16th-century villa surrounded by 5 hectares of private vineyards. Features original frescoes, modern amenities, and panoramic views of the Chianti hills.',
    2500000,
    'Chianti',
    'Tuscany',
    6,
    5,
    450,
    'villa',
    ARRAY['Wine Cellar', 'Pool', 'Garden', 'Historic Features', 'Mountain View'],
    ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9'],
    true,
    'available'
  ),
  (
    'Modern Amalfi Coast Apartment',
    'Contemporary apartment with breathtaking sea views, private terrace, and direct beach access. Recently renovated with high-end finishes.',
    1200000,
    'Positano',
    'Campania',
    3,
    2,
    120,
    'apartment',
    ARRAY['Sea View', 'Terrace', 'Beach Access', 'Modern Kitchen', 'Air Conditioning'],
    ARRAY['https://images.unsplash.com/photo-1615529182904-14819c35db37', 'https://images.unsplash.com/photo-1615529182904-14819c35db38'],
    true,
    'available'
  ),
  (
    'Historic Florence Palazzo',
    'Magnificent palazzo in the heart of Florence featuring original Renaissance architecture, private courtyard, and potential for hotel conversion.',
    5800000,
    'Florence',
    'Tuscany',
    12,
    8,
    800,
    'estate',
    ARRAY['Historic', 'Courtyard', 'Frescoes', 'City Center', 'Investment Potential'],
    ARRAY['https://images.unsplash.com/photo-1533929736458-ca588d08c8be', 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be'],
    true,
    'available'
  ),
  (
    'Lake Como Waterfront Villa',
    'Elegant villa with private dock, boat house, and unparalleled views of Lake Como. Includes staff quarters and manicured gardens.',
    4200000,
    'Bellagio',
    'Lombardy',
    5,
    6,
    350,
    'villa',
    ARRAY['Lake View', 'Boat House', 'Private Dock', 'Garden', 'Staff Quarters'],
    ARRAY['https://images.unsplash.com/photo-1518780664697-55e3ad937233', 'https://images.unsplash.com/photo-1518780664697-55e3ad937234'],
    true,
    'available'
  ),
  (
    'Umbrian Countryside Estate',
    'Restored farmhouse with guest cottages, olive grove, and equestrian facilities. Perfect for agriturismo business.',
    1800000,
    'Perugia',
    'Umbria',
    8,
    7,
    500,
    'estate',
    ARRAY['Olive Grove', 'Equestrian', 'Pool', 'Guest Houses', 'Business Potential'],
    ARRAY['https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7', 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a8'],
    true,
    'available'
  ),
  (
    'Venice Canal Apartment',
    'Charming apartment in a 15th-century palazzo with direct canal views. Recently restored with modern comforts while maintaining historic character.',
    950000,
    'Venice',
    'Veneto',
    2,
    2,
    90,
    'apartment',
    ARRAY['Canal View', 'Historic Building', 'Modern Kitchen', 'Air Conditioning', 'Water Entrance'],
    ARRAY['https://images.unsplash.com/photo-1523217582562-09d0def993a6', 'https://images.unsplash.com/photo-1523217582562-09d0def993a7'],
    true,
    'available'
  ); 