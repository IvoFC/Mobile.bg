(function () {

    var cars = [
        ['AC', '', 'Други'],
        ['Acura', '', 'Integra', 'Mdx', 'Rl', 'Rsx', 'Slx', 'Tl', 'Tsx'],
        ['Aixam', '', '400', '505', '600'],
        ['Alfa romeo', '', '145', '146', '147', '155', '156', '156 sportwagon', '159', '159 sportwagon', '164', '166', '33', '75', '76', '8C Competizione', '90', 'Alfetta', 'Brera', 'Crosswagon q4', 'Giulietta', 'Gt', 'Gtv', 'MiTo', 'Spider', 'Sprint', 'Sud'],
        ['Aston martin', '', '.', 'DBS', 'Db7', 'Db9', 'Rapide', 'V12 Vantage', 'V8 Vantage', 'Vanquish'],
        ['Audi', '', '100', '200', '50', '60', '80', '90', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Allroad', 'R8', 'Rs3', 'Rs4', 'Rs5', 'Rs6', 'Rs7', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'Tt'],
        ['Austin', '', 'Allegro', 'Ambassador', 'Maestro', 'Maxi', 'Metro', 'Mg', 'Mini', 'Montego', 'Princess'],
        ['Bentley', '', 'Arnage', 'Azure', 'Continental', 'Continental gt', 'Flying Spur', 'GT Convertible', 'Mulsanne', 'T-series'],
        ['Berliner', '', 'Coupe'],
        ['Bmw', '', '1', '114', '116', '118', '120', '123', '125', '130', '135', '1500', '1600', '1602', '1800', '2', '2 Active Tourer', '2000', '2002', '220 d', '2800', '3', '315', '316', '318', '320', '323', '324', '325', '328', '330', '335', '3gt', '4', '420', '428', '430', '435', '5', '5 Gran Turismo', '501', '518', '520', '523', '524', '525', '528', '530', '535', '540', '545', '550', '5GT', '6', '628', '630', '633', '635', '640', '645', '650', '7', '700', '721', '723', '725', '728', '730', '732', '733', '735', '740', '745', '750', '760', '840', '850', 'Izetta', 'M', 'M Coupе', 'M135', 'M2', 'M3', 'M4', 'M5', 'M6', 'Z1', 'Z3', 'Z4', 'Z8', 'i3', 'i8'],
        ['Borgward', '', 'Hansa'],
        ['Brilliance', '', 'BC3', 'BS2 ', 'BS4', 'BS6', 'Dolphin', 'FRV', 'FSV', 'H220', 'H230', 'H320', 'H330', 'H530'],
        ['Bugatti', '', 'Chiron', 'Veyron'],
        ['Buick', '', 'Electra', 'Invicta', 'Park avenue', 'Regal', 'Skylark', 'Skyline'],
        ['Cadillac', '', 'Allante', 'BLS', 'Brougham', 'Cts', 'Deville', 'Eldorado', 'Fleetwood', 'STS', 'Seville', 'Srx', 'Xlr'],
        ['Chevrolet', '', 'Alero', 'Astro', 'Aveo', 'Beretta', 'Camaro', 'Caprice', 'Cavalier', 'Cobalt', 'Corvette', 'Cruze', 'Epica', 'Evanda', 'Hhr', 'Impala', 'Kalos', 'Lacetti', 'Lumina', 'Malibu', 'Matiz', 'Nova', 'Nubira', 'Orlando', 'Rezzo', 'Silverado', 'Spark', 'Ssr', 'Tacuma', 'Transsport', 'Volt'],
        ['Chrysler', '', '300c', '300m', 'Crossfire', 'Daytona', 'Es', 'Gr.voyager', 'Gts', 'Interpid', 'Lebaron', 'Neon', 'New yorker', 'Pacifica', 'Pt cruiser', 'Saratoga', 'Sebring', 'Stratus', 'Vision', 'Voyager'],
        ['Citroen', '', '2cv', 'Ax', 'Axel', 'Berlingo', 'Bx', 'C - Zero', 'C-Elysee', 'C1', 'C15', 'C2', 'C3', 'C3 Picasso', 'C3 pluriel', 'C4', 'C4 Cactus', 'C4 Picasso', 'C5', 'C6', 'C8', 'Cx', 'DS3', 'DS4', 'DS5', 'Ds', 'Evasion', 'Grand C4 Picasso', 'Gsa', 'Gx', 'Ln', 'Nemo', 'Oltcit', 'Saxo', 'Visa', 'Xantia', 'Xm', 'Xsara', 'Xsara picasso', 'Zx'],
        ['Corvette', '', 'C06 Convertible', 'C06 Coupe', 'Powa', 'Z06'],
        ['Dacia', '', '1100', '1300', '1304', '1307', '1310', '1350', 'Dokker', 'Liberta', 'Lodgy', 'Logan', 'Nova', 'Pickup', 'Sandero', 'Solenza'],
        ['Daewoo', '', 'Ace', 'Chairman', 'Cielo', 'Espero', 'Evanda', 'Fso', 'Kalos', 'Lacetti', 'Lanos', 'Leganza', 'Magnus', 'Matiz', 'Nexia', 'Nubira', 'Prince', 'Racer', 'Rezzo', 'Super', 'Tacuma', 'Tico'],
        ['Daihatsu', '', 'Applause', 'Charade', 'Charmant', 'Copen', 'Cuore', 'Gran move', 'Hijet', 'Materia', 'Move', 'Sharade', 'Sirion', 'Trevis', 'Yrv'],
        ['Daimler', '', 'Double six', 'Six', 'Sovereign'],
        ['Datsun', '', 'Bluebird', 'Cherry', 'Stanza'],
        ['Dkw', '', 'F102'],
        ['Dodge', '', 'Avenger', 'Caliber', 'Caravan', 'Challenger', 'Charger', 'Coronet', 'Daytona', 'Interpid', 'Journey', 'Magnum', 'Neon', 'Ram', 'Shadow', 'Stealth', 'Stratus', 'Viper'],
        ['Dr', '', '1', '2', '3'],
        ['Eagle', '', 'Premire', 'Talon', 'Vision'],
        ['FSO', '', 'Polonez'],
        ['Ferrari', '', '348', '360 modena', '360 spider', '458 Italia', '488', '599', 'California', 'Enzo', 'F12berlinetta', 'F430', 'F456m', 'F575m maranello', 'F612 scaglietti', 'FF', 'LaFerrari', 'Mondial 8', 'Testarossa'],
        ['Fiat', '', '1100', '124', '125', '126', '127', '128', '131', '132', '1400', '1500', '1800', '500', '500L', '600', '650', '750', 'Albea', 'Argenta', 'Barchetta', 'Bertone', 'Brava', 'Bravo', 'Cinquecento', 'Coupe', 'Croma', 'Doblo', 'Duna', 'Fiorino', 'Idea', 'Linea', 'Marea', 'Multipla', 'Palio', 'Panda', 'Punto', 'Qubo', 'Regata', 'Ritmo', 'Scudo', 'Sedici', 'Seicento', 'Siena', 'Stilo', 'Strada', 'Tempra', 'Tipo', 'Topolino', 'Ulysse', 'Uno'],
        ['Ford', '', '12m', '15m', '17m', '20m', 'Aerostar', 'B-Max', 'C-max', 'Capri', 'Connect', 'Consul', 'Cortina', 'Cosworth', 'Cougar', 'Countur', 'Courier', 'Crown victoria', 'Ecoline', 'Escort', 'Fiesta', 'Focus', 'Fusion', 'Galaxy', 'Granada', 'Ka', 'Mondeo', 'Mustang', 'Orion', 'Probe', 'Puma', 'Rs', 'S-Max', 'Scorpio', 'Sierra', 'Sportka', 'Streetka', 'Taunus', 'Taurus', 'Thunderbird', 'Windstar', 'Zephyr'],
        ['Geo', '', 'Metro', 'Prizm', 'Storm'],
        ['Great Wall', '', 'Voleex C10', 'Voleex C30'],
        ['Heinkel', '', 'Тrojan'],
        ['Honda', '', 'Accord', 'Cbr', 'Cbx', 'City', 'Civic', 'Civic ballade', 'Concerto', 'Cr-v', 'Crx', 'Crz', 'Fit', 'Fr-v', 'Hr-v', 'Insight', 'Integra', 'Jazz', 'Legend', 'Logo', 'Nsx', 'Odyssey', 'Prelude', 'Quintet', 'S2000', 'Shuttle', 'Stream'],
        ['Hyundai', '', 'Accent', 'Atos', 'Coupe', 'Elantra', 'Excel', 'Genesis', 'Getz', 'Grace', 'Grandeur', 'I10', 'I20', 'I30', 'I40', 'Ix20', 'Lantra', 'Matrix', 'Pony', 'Porter', 'S', 'Santamo', 'Sonata', 'Sonica', 'Stelar', 'Tb', 'Trajet', 'Veloster ', 'Xg'],
        ['Ifa', '', 'F9'],
        ['Infiniti', '', 'Fx45', 'G', 'G coupe', 'G sedan', 'I', 'J', 'M', 'Q'],
        ['Innocenti', '', 'Mini'],
        ['Isuzu', '', 'Gemini', 'Piazza', 'Pickup'],
        ['Jaguar', '', 'Daimler', 'Daimler double six', 'Daimler six', 'F-Type', 'S-type', 'Sovereign', 'Super v8', 'X-type', 'XE', 'Xf', 'Xj', 'Xjr', 'Xjs', 'Xjsc', 'Xk8', 'Xkr'],
        ['Kia', '', 'Avella delta', 'Cadenza', 'Carens', 'Carnival', 'Ceed', 'Cerato', 'Clarus', 'Joecs', 'Joyce', 'Magentis', 'Niro', 'Opirus', 'Optima', 'Picanto', 'Pride', 'Pro ceed', 'Quoris', 'Rio', 'Sephia', 'Shuma', 'Soul', 'Spectra', 'Venga'],
        ['Lada', '', '1200', '1300', '1500', '1600', '2101', '21011', '21012', '21013', '21015', '2102', '2103', '2104', '21043', '2105', '21051', '21053', '2106', '21061', '21063', '2107', '21074', '2108', '21083', '2109', '21093', '21099', '2110', '21213', 'Granta', 'Kalina', 'Nova', 'Oka', 'Priora', 'Samara'],
        ['Lamborghini', '', 'Aventador', 'Countach', 'Diablo', 'Gallardo', 'Huracan', 'Murcielago', 'Reventon', 'Veneno'],
        ['Lancia', '', 'A112', 'Aurelia', 'Beta', 'Dedra', 'Delta', 'Kappa', 'Lybra', 'Musa', 'Phedra', 'Prisma', 'Thema', 'Thesis', 'Unior', 'Y', 'Y10', 'Ypsilon', 'Zeta'],
        ['Lexus', '', 'CT200h', 'Es', 'Gs', 'Is', 'LFA', 'Ls', 'RC', 'Sc'],
        ['Lifan', '', 'LF1010', 'LF320', 'LF520', 'LF620', 'LF6361', 'LF7130', 'LF7160'],
        ['Lincoln', '', 'Continental', 'Ls', 'Mark', 'Mkz', 'Town car', 'Zephyr'],
        ['Lotus', '', 'Elise', 'Europe', 'Evora', 'Exige'],
        ['Maserati', '', '3200 gt', 'Biturbo', 'Coupe gt', 'Ghibli', 'GranCabrio', 'GranTurismo', 'Gransport', 'Quattroporte', 'Spyder', 'Zagato'],
        ['Matra', '', 'Murena', 'Rancho'],
        ['Maybach', '', '57', '62'],
        ['Mazda', '', '121', '2', '3', '323', '5', '6', '626', '929', 'Demio', 'Mpv', 'Mx-3', 'Mx-5', 'Mx-6', 'Premacy', 'Rx-7', 'Rx-8', 'Tribute', 'Xedos'],
        ['McLaren', '', '540C Coupe', '570S Coupe', '650S', '675LT', 'F1', 'MP4-12C', 'P1'],
        ['Mercedes', '', '110', '111', '113', '114', '115', '116', '123', '124', '126', '126-260', '150', '170', '180', '190', '200', '220', '230', '240', '250', '260', '280', '290', '300', '320', '350', '380', '420', '450', '500', '560', '600', 'A', 'A 140', 'A 150', 'A 160', 'A 170', 'A 180', 'A 190', 'A 200', 'A 210', 'A 250', 'A45 AMG', 'AMG GT', 'AMG GT S', 'Adenauer', 'B', 'B 150', 'B 170', 'B 180', 'B 200', 'C', 'C 180', 'C 200', 'C 220', 'C 230', 'C 240', 'C 250', 'C 270', 'C 280', 'C 30 AMG', 'C 300', 'C 32 AMG', 'C 320', 'C 350', 'C 36 AMG', 'C 400', 'C 43 AMG', 'C 450 AMG', 'C 55 AMG', 'C 63 AMG', 'CL', 'CL 230', 'CL 320', 'CL 420', 'CL 500', 'CL 55 AMG', 'CL 600', 'CL 63 AMG', 'CL 65 AMG', 'CLA', 'CLA 180', 'CLA 200', 'CLA 220', 'CLA 250', 'CLA 45 AMG', 'CLC', 'CLC 160', 'CLC 180', 'CLC 200', 'CLC 220', 'CLC 230', 'CLC 250', 'CLC 350', 'CLK', 'CLK 55 AMG', 'CLK 63 AMG', 'CLS', 'CLS 250', 'CLS 300', 'CLS 320', 'CLS 350', 'CLS 500', 'CLS 55', 'CLS 55 AMG', 'CLS 63', 'CLS 63 AMG', 'Citan', 'E', 'E 200', 'E 220', 'E 230', 'E 240', 'E 250', 'E 260', 'E 270', 'E 280', 'E 290', 'E 300', 'E 320', 'E 350', 'E 36 AMG', 'E 400', 'E 420', 'E 430', 'E 50 AMG', 'E 500', 'E 55', 'E 55 AMG', 'E 60', 'E 60 AMG', 'E 63 AMG', 'GLA', 'GLA 180', 'GLA 200', 'GLA 220', 'GLA 250', 'GLA 45 AMG', 'R', 'R 280', 'R 300', 'R 320', 'R 350', 'R 500', 'R 63 AMG', 'S', 'S 250', 'S 280', 'S 300', 'S 320', 'S 350', 'S 400', 'S 420', 'S 430', 'S 450', 'S 500', 'S 55 AMG', 'S 550', 'S 600', 'S 63', 'S 63 AMG', 'S 65', 'S 65 AMG', 'SL', 'SL 55 AMG', 'SL 60 AMG', 'SL 63 AMG', 'SL 65 AMG', 'SLK', 'SLK 32 AMG', 'SLK 55 AMG', 'SLR', 'SLS', 'SLS AMG', 'Vaneo'],
        ['Mercury', '', 'Marauder', 'Milan', 'Monarch', 'Villager'],
        ['Mg', '', 'Mga', 'Mgb', 'Mgf', 'Tf', 'Zr', 'Zs', 'Zt', 'Zt-t'],
        ['Mini', '', 'Clubman', 'Cooper', 'Cooper cabrio', 'Cooper s', 'Cooper s cabrio', 'Coupe', 'D one', 'One', 'One cabrio', 'Paceman'],
        ['Mitsubishi', '', '3000 gt', 'Carisma', 'Colt', 'Cordia', 'Eclipse', 'Galant', 'Grandis', 'Lancer', 'Sapporo', 'Sigma', 'Space gear', 'Space runner', 'Space star', 'Space wagon', 'Starion', 'Tredia'],
        ['Morgan', '', 'Aero8'],
        ['Moskvich', '', '1360', '1361', '1500', '2136', '2138', '2140', '2141', '21412', '21417', '2142', '2715', '401', '403', '407', '408', '412', '426', '427', '503', 'Aleko', 'Иж'],
        ['Nissan', '', '100 nx', '200 sx', '240 z', '280 z', '300 zx', '350z', '370Z', 'Almera', 'Almera tino', 'Altima', 'Bluebird', 'Cedric', 'Cherry', 'Cube', 'Figaro', 'Gt-r', 'Kubistar', 'Laurel', 'Leaf ', 'Maxima', 'Micra', 'Note', 'Pickup', 'Pixo', 'Prairie', 'Primera', 'Pulsar', 'Serena', 'Silvia', 'Skyline', 'Stantza', 'Sunny', 'Tiida', 'Versa', 'e-NV200'],
        ['Oldsmobile', '', 'Achieva', 'Alero', 'Aurora', 'Bravada', 'Cutlass', 'Firenza', 'Intrigue', 'Regency', 'Silhouette', 'Toronado'],
        ['Opel', '', 'Adam', 'Admiral', 'Agila', 'Ampera', 'Ascona', 'Astra', 'Calibra', 'Cascada', 'Combo', 'Commodore', 'Corsa', 'Diplomat', 'Gt', 'Insignia', 'Kadett', 'Kapitaen', 'Karl', 'Manta', 'Meriva', 'Monza', 'Omega', 'Rekord', 'Senator', 'Signum', 'Sintra', 'Speedster', 'Tigra', 'Vectra', 'Zafira'],
        ['Perodua', '', 'Kancil', 'Kelisa', 'Kembara', 'Kenari', 'Nippa', 'Rusa'],
        ['Peugeot', '', '1007', '104', '106', '107', '108', '2008', '202', '204', '205', '206', '207', '208', '3008', '301', '304', '305', '306', '307', '308', '309', '402', '403', '404', '405', '406', '407', '5008', '504', '505', '508', '604', '605', '607', '806', '807', 'Bipper', 'Partner', 'RCZ', 'Range', 'iOn'],
        ['Pgo', '', 'Cevennes', 'Speedster'],
        ['Plymouth', '', 'Acclaim', 'Barracuda', 'Breeze', 'Colt', 'Grand voyager', 'Horizon', 'Laser', 'Neon', 'Prowler', 'Reliant', 'Road runner', 'Sundance', 'Volare', 'Voyager'],
        ['Polonez', '', 'Pickup'],
        ['Pontiac', '', 'Aztec', 'Bonneville', 'Fiero', 'Firebird', 'Grand am', 'Grand prix', 'Gto', 'Lemans', 'Solstice', 'Sunbird', 'Sunfire', 'Tempest', 'Trans am', 'Trans sport', 'Vibe'],
        ['Porsche', '', '911', '918 Spyder', '924', '928', '935', '944', '956', '968', '991', '993', '996', 'Boxster', 'Carrera', 'Cayman', 'Panamera'],
        ['Proton', '', '400', 'Arena', 'Persone', 'Satria'],
        ['Renault', '', '10', '11', '12', '14', '16', '18', '19', '20', '21', '25', '29', '30', '4', '5', '8', '9', 'Alpine', 'Avantime', 'Bakara', 'Bulgar', 'Captur', 'Chamade', 'Clio', 'Espace', 'Express', 'Fluence', 'Fuego', 'Grand espace', 'Grand scenic', 'Kangoo', 'Koleos', 'Laguna', 'Laguna Coupe', 'Latitude', 'Megane', 'Modus', 'Nevada', 'Rapid', 'Safrane', 'Scenic', 'Symbol', 'Talisman', 'Twingo', 'Twizy', 'Vel satis', 'Zoe'],
        ['Rolls-Royce', '', 'Ghost', 'Phantom', 'Silver Seraph', 'Wraith'],
        ['Rover', '', '111', '114', '200', '213', '214', '216', '220', '25', '400', '414', '416', '418', '420', '45', '600', '618', '620', '623', '75', '800', '820', '825', '827', 'City', 'Estate', 'Maestro', 'Metro', 'Mini', 'Montego', 'Streetwise'],
        ['SECMA', '', 'F16', 'F440DCI', 'Fun Buggy', 'Fun Extreem', 'Fun Lander', 'Fun Quad'],
        ['Saab', '', '9-3', '9-5', '900', '9000'],
        ['Samand', '', 'LX'],
        ['Saturn', '', 'Astra', 'Aura', 'Sky'],
        ['Scion', '', 'Tc', 'Xa', 'Xb'],
        ['Seat', '', 'Alhambra', 'Altea', 'Arosa', 'Cordoba', 'Exeo', 'Fura', 'Ibiza', 'Inka', 'Leon', 'Malaga', 'Marbella', 'Mii', 'Ronda', 'Terra', 'Toledo', 'Vario'],
        ['Shatenet', '', 'Stella'],
        ['Shuanghuan', '', 'Noble'],
        ['Simca', '', '1307', '1308', '1309', '1510', 'Aront', 'Chrysler', 'Horizon', 'Shambord', 'Solara', 'Special', 'Versail'],
        ['Skoda', '', '100', '1000', '105', '120', '125', '130', '135', '136', 'Citigo', 'Fabia', 'Favorit', 'Felicia', 'Forman', 'Octavia', 'Praktik', 'Rapid', 'Roomster', 'Superb'],
        ['Smart', '', 'Forfour', 'Fortwo', 'Mc', 'Roadster'],
        ['Ssang yong', '', 'Chairman', 'Rodius'],
        ['Subaru', '', '1800', 'BRZ', 'Baja', 'E12', 'Forester', 'G3x justy', 'Impreza', 'Justy', 'Legacy', 'Libero', 'Outback', 'Svx', 'Trezia', 'Vivio', 'XT', 'XV'],
        ['Suzuki', '', 'Alto', 'Baleno', 'Celerio', 'Forenza', 'Ignis', 'Kizashi', 'Liana', 'Maruti', 'Reno', 'SX4', 'Sg', 'Splash', 'Swift', 'Wagon r'],
        ['Talbot', '', '1100', '1310', 'Horizon', 'Matra', 'Murena', 'Samba', 'Simka', 'Solara'],
        ['Tata', '', 'Aria', 'Estate', 'Indica', 'Mint', 'Nano'],
        ['Tavria', '', '.', 'Dana', 'Kombi', 'Slavuta'],
        ['Tazzari', '', 'Zero'],
        ['Terberg', '', 'Fl2850', 'Sl3000'],
        ['Tesla', '', 'Model 3', 'Model S', 'Roadster', 'Roadster Sport'],
        ['Tofas', '', 'Dogan', 'Kartal', 'Sahin'],
        ['Toyota', '', 'Auris', 'Avalon', 'Avensis', 'Avensis verso', 'Aygo', 'Camry', 'Carina', 'Celica', 'Corolla', 'Corolla verso', 'Cressida', 'Crown', 'GT86', 'IQ', 'Matrix', 'Mr2', 'Paseo', 'Picnic', 'Previa', 'Prius', 'Scion', 'Sienna', 'Starlet', 'Supra', 'Tercel', 'Verso', 'Verso S', 'Yaris', 'Yaris verso'],
        ['Trabant', '', '600', '601', 'Combi', 'T 1.1'],
        ['Triumph', '', 'Acclaim', 'Dolomite', 'Herald', 'Spitfire', 'Stag', 'Tr6', 'Tr7'],
        ['VROMOS', '', 'Kiwi', 'Rhea'],
        ['Volga', '', '22', '24', '3110', '3111', 'M 20', 'M 21', 'Siber'],
        ['Volvo', '', '142', '144', '145', '164', '1800 es', '240', '244', '245', '262 c', '264', '340', '343', '344', '345', '360', '440', '460', '480', '66', '740', '744', '745', '760', '765', '770', '780', '850', '940', '960', 'C30', 'C70', 'P 1800', 'S40', 'S60', 'S70', 'S80', 'V40', 'V50', 'V60', 'V70', 'Xc70'],
        ['Vw', '', '1200', '1300', '1302', '1303', '1500', '1600', 'Bora', 'CC', 'Caddy', 'Corrado', 'Derby', 'Eos', 'Fox', 'Golf', 'Golf Plus', 'Golf Variant', 'Jetta', 'K 70', 'Karmann-ghia', 'Lupo', 'Multivan', 'New beetle', 'Passat', 'Passat CC', 'Phaeton', 'Polo', 'Rabbit', 'Santana', 'Scirocco', 'Sharan', 'Touran', 'Up', 'Vento'],
        ['Warszawa', '', '223', '232'],
        ['Wartburg', '', '1.3', '311', '312', '353'],
        ['Wiesmann', '', 'Gt', 'Mf3', 'Mf4', 'Mf5'],
        ['Xinshun', '', 'XS-D055'],
        ['Zastava', '', '600', '750', 'Florida', 'Gt 55', 'Koral', 'Miami', 'Yugo 45'],
        ['Zaz', '', '1102', '1103', '1105', '965', '966', '968', 'Tavria'],
        ['Други', '', ' '],
        ['Победа', '', 'М'],
        ['София', '', 'С'],
        ['Чайка', '', 'М']
    ];

    var brand = '<option value=""></option> ';

    for (var brands = 0; brands < cars.length; brands++) {
        for (var models = 0; models < cars[brands].length; models++) {
            if (cars[brands][0] == cars[brands][models]) {
                brand += '<option value="' + cars[brands][0] + '">' + cars[brands][0] + '</option>';
            }
        }
    }
    document.getElementById('brand').innerHTML = brand;

    function changed() {
        var model = '';
        var brand1 = document.getElementById('brand');
        brand1 = brand1.options[brand1.selectedIndex].value;
        var number = null;

        for (var brands = 0; brands < cars.length; brands++) {
            for (var models = 0; models < cars[brands].length; models++) {
                if (brand1 == cars[brands][models]) {
                    number = brands;

                } else if (brands == number && brand1 != cars[brands][models]) {
                    model += '<option value="' + cars[number][models] + '">' + cars[number][models] + '</option>';
                }
            }
        }
        document.getElementById('model1').innerHTML = model;
    }

    document.getElementById('brand').addEventListener('change', changed, false);


    // Region drop down:

    var regions = ['Благоевград', 'Бургас', 'Варна', 'Велико Търново', 'Видин', 'Враца', 'Габрово', 'Добрич', 'Дупница', 'Кърджали', 'Кюстендил', 'Ловеч', 'Монтана', 'Пазарджик', 'Перник', 'Плевен', 'Пловдив', 'Разград', 'Русе', 'Силистра', 'Сливен', 'Смолян', 'София', 'Стара Загора', 'Търговище', 'Хасково', 'Шумен', 'Ямбол', 'Извън страната'];
    var region = '<option value=""></option> ';
    for (var region1 = 0; region1 < regions.length; region1++) {
        region += '<option value="' + regions[region1] + '">' + regions[region1] + '</option>'
    }
    document.getElementById('region1').innerHTML = region;

    // Color drop down:

    var colors = ['Tъмно син', 'Банан', 'Беата', 'Бежов', 'Бордо', 'Бронз', 'Бял', 'Винен', 'Виолетов', 'Вишнев', 'Графит', 'Жълт', 'Зелен', 'Златист', 'Кафяв', 'Керемиден', 'Кремав', 'Лилав', 'Металик', 'Оранжев', 'Охра', 'Пепеляв', 'Перла', 'Пясъчен', 'Резидав', 'Розов', 'Сахара', 'Светло сив', 'Светло син', 'Сив', 'Син', 'Слонова кост', 'Сребърен', 'Т.зелен', 'Тъмно сив', 'Тъмно син мет.', 'Тъмно червен', 'Тютюн', 'Хамелеон', 'Червен', 'Черен',];
    var color = '<option value=""></option> ';
    for (var color1 = 0; color1 < colors.length; color1++) {
        color += '<option value="' + colors[color1] + '">' + colors[color1] + '</option>'
    }

    document.getElementById('color').innerHTML = color;

    // Date drop down:

    var months = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'];
    var options = '<option value=""></option> ';

    for (var month = 0; month < months.length; month++) {
        options += '<option value="' + months[month] + '">' + months[month] + '</option>';
    }
    document.getElementById("productionDate1").innerHTML = options;

    var years = '<option value=""></option> ';
    var thisYear = new Date().getFullYear();

    for (var year = thisYear; year >= 1930; year--) {
        years += '<option value="' + year + '">' + year + '</option>';
    }

    document.getElementById("productionDate2").innerHTML = years;

})();