PGDMP             	             {            auth_db    14.6    14.6 /    &           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            '           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            (           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            )           1262    16394    auth_db    DATABASE     d   CREATE DATABASE auth_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Zambia.1252';
    DROP DATABASE auth_db;
                postgres    false            ?            1259    16552    admin    TABLE       CREATE TABLE public.admin (
    id integer NOT NULL,
    date_of_birth date,
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255) NOT NULL,
    username character varying(255)
);
    DROP TABLE public.admin;
       public         heap    postgres    false            ?            1259    16551    admin_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.admin_id_seq;
       public          postgres    false    216            *           0    0    admin_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;
          public          postgres    false    215            ?            1259    16595    appointment    TABLE     ?   CREATE TABLE public.appointment (
    id integer NOT NULL,
    appointment_approved boolean,
    appointment_date date,
    appointment_details character varying(255),
    appointment_time character varying(255)
);
    DROP TABLE public.appointment;
       public         heap    postgres    false            ?            1259    16594    appointment_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.appointment_id_seq;
       public          postgres    false    218            +           0    0    appointment_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;
          public          postgres    false    217            ?            1259    16526    doctor    TABLE     =  CREATE TABLE public.doctor (
    id integer NOT NULL,
    date_of_birth date,
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255) NOT NULL,
    username character varying(255),
    specialization character varying(255)
);
    DROP TABLE public.doctor;
       public         heap    postgres    false            ?            1259    16525    doctor_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.doctor_id_seq;
       public          postgres    false    212            ,           0    0    doctor_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;
          public          postgres    false    211            ?            1259    16539    patient    TABLE     7  CREATE TABLE public.patient (
    id integer NOT NULL,
    date_of_birth date,
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255) NOT NULL,
    username character varying(255),
    disease character varying(255)
);
    DROP TABLE public.patient;
       public         heap    postgres    false            ?            1259    16538    patient_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.patient_id_seq;
       public          postgres    false    214            -           0    0    patient_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.patient_id_seq OWNED BY public.patient.id;
          public          postgres    false    213            ?            1259    16428    user    TABLE       CREATE TABLE public."user" (
    id integer NOT NULL,
    date_of_birth date,
    email character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    password character varying(255) NOT NULL,
    username character varying(255)
);
    DROP TABLE public."user";
       public         heap    postgres    false            ?            1259    16427    user_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    210            .           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    209            s           2604    16555    admin id    DEFAULT     d   ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);
 7   ALTER TABLE public.admin ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            t           2604    16598    appointment id    DEFAULT     p   ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);
 =   ALTER TABLE public.appointment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            q           2604    16529 	   doctor id    DEFAULT     f   ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);
 8   ALTER TABLE public.doctor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            r           2604    16542 
   patient id    DEFAULT     h   ALTER TABLE ONLY public.patient ALTER COLUMN id SET DEFAULT nextval('public.patient_id_seq'::regclass);
 9   ALTER TABLE public.patient ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            p           2604    16431    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            !          0    16552    admin 
   TABLE DATA           d   COPY public.admin (id, date_of_birth, email, first_name, last_name, password, username) FROM stdin;
    public          postgres    false    216   ?5       #          0    16595    appointment 
   TABLE DATA           x   COPY public.appointment (id, appointment_approved, appointment_date, appointment_details, appointment_time) FROM stdin;
    public          postgres    false    218   p6                 0    16526    doctor 
   TABLE DATA           u   COPY public.doctor (id, date_of_birth, email, first_name, last_name, password, username, specialization) FROM stdin;
    public          postgres    false    212   ?6                 0    16539    patient 
   TABLE DATA           o   COPY public.patient (id, date_of_birth, email, first_name, last_name, password, username, disease) FROM stdin;
    public          postgres    false    214   ?8                 0    16428    user 
   TABLE DATA           e   COPY public."user" (id, date_of_birth, email, first_name, last_name, password, username) FROM stdin;
    public          postgres    false    210   &:       /           0    0    admin_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.admin_id_seq', 3, true);
          public          postgres    false    215            0           0    0    appointment_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.appointment_id_seq', 4, true);
          public          postgres    false    217            1           0    0    doctor_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.doctor_id_seq', 8, true);
          public          postgres    false    211            2           0    0    patient_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.patient_id_seq', 6, true);
          public          postgres    false    213            3           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 7, true);
          public          postgres    false    209            ?           2606    16559    admin admin_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            postgres    false    216            ?           2606    16600    appointment appointment_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.appointment DROP CONSTRAINT appointment_pkey;
       public            postgres    false    218            |           2606    16533    doctor doctor_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.doctor DROP CONSTRAINT doctor_pkey;
       public            postgres    false    212            ?           2606    16546    patient patient_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.patient DROP CONSTRAINT patient_pkey;
       public            postgres    false    214            ?           2606    16550 $   patient uk_avbwwnxo3348e62y2reiv3fko 
   CONSTRAINT     c   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT uk_avbwwnxo3348e62y2reiv3fko UNIQUE (username);
 N   ALTER TABLE ONLY public.patient DROP CONSTRAINT uk_avbwwnxo3348e62y2reiv3fko;
       public            postgres    false    214            ?           2606    16548 $   patient uk_bawli8xm92f30ei6x9p3h8eju 
   CONSTRAINT     `   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT uk_bawli8xm92f30ei6x9p3h8eju UNIQUE (email);
 N   ALTER TABLE ONLY public.patient DROP CONSTRAINT uk_bawli8xm92f30ei6x9p3h8eju;
       public            postgres    false    214            ?           2606    16561 "   admin uk_c0r9atamxvbhjjvy5j8da1kam 
   CONSTRAINT     ^   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT uk_c0r9atamxvbhjjvy5j8da1kam UNIQUE (email);
 L   ALTER TABLE ONLY public.admin DROP CONSTRAINT uk_c0r9atamxvbhjjvy5j8da1kam;
       public            postgres    false    216            ~           2606    16537 #   doctor uk_ctspax8ladjoxfko6qkhxwmpb 
   CONSTRAINT     b   ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT uk_ctspax8ladjoxfko6qkhxwmpb UNIQUE (username);
 M   ALTER TABLE ONLY public.doctor DROP CONSTRAINT uk_ctspax8ladjoxfko6qkhxwmpb;
       public            postgres    false    212            ?           2606    16563 "   admin uk_gfn44sntic2k93auag97juyij 
   CONSTRAINT     a   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT uk_gfn44sntic2k93auag97juyij UNIQUE (username);
 L   ALTER TABLE ONLY public.admin DROP CONSTRAINT uk_gfn44sntic2k93auag97juyij;
       public            postgres    false    216            ?           2606    16535 #   doctor uk_jdtgexk368pq6d2yb3neec59d 
   CONSTRAINT     _   ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT uk_jdtgexk368pq6d2yb3neec59d UNIQUE (email);
 M   ALTER TABLE ONLY public.doctor DROP CONSTRAINT uk_jdtgexk368pq6d2yb3neec59d;
       public            postgres    false    212            v           2606    16437 !   user uk_ob8kqyqqgmefl0aco34akdtpe 
   CONSTRAINT     _   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT uk_ob8kqyqqgmefl0aco34akdtpe UNIQUE (email);
 M   ALTER TABLE ONLY public."user" DROP CONSTRAINT uk_ob8kqyqqgmefl0aco34akdtpe;
       public            postgres    false    210            x           2606    16439 !   user uk_sb8bbouer5wak8vyiiy4pf2bx 
   CONSTRAINT     b   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT uk_sb8bbouer5wak8vyiiy4pf2bx UNIQUE (username);
 M   ALTER TABLE ONLY public."user" DROP CONSTRAINT uk_sb8bbouer5wak8vyiiy4pf2bx;
       public            postgres    false    210            z           2606    16435    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    210            !   ?   x?M???0??u?l?ug?(?`ĸi ?b??┘?͹??ǀ ?T??<???G??I?/??,y?_/g??`? ???D??;??VZ???u???GP=?r?X?n:?z????????/~?P?v]BTLT????n?8K????ۤpآ?H??t????^Þ	?ʹ??(??M?hQ?њ?,|1o?4?xF?      #   k   x?E?A
?@???)?#????	??t??)?-z})ȸ~?Xaj?iY??#????????濳?'??O?R??̂s??c?hw??y@???#y????;??("         ?  x?e?Ms?0???+??m?D??Ud?"ł\?????Z}i?k?:??3??<?{`? O????H?yW ?s1-???X(?7?dF??0?,?WL??#s??zwY??%????S??˽??PB?
??q`?Y???X?ۯ.?`???k??Zd]?W\x??p&?#o_??I.? ???\X?
Ã??_?t6???:??????>??!?i?+??_???? ??⫸V+????ڍt8?Ky?q??ҎfA??ҳ?Vc??<????\9?r*?????N??|?T?fJkg???N???6<3????d??:k>??ދADn@'=G?%???p?pN?#??#Ln?????#/?D~???0R?d?F??<%m?A?G?u,?ƥ??yCqr????ߜ?~?X????Ľ         ?  x?e??n?0@??9r[?L?nihh4??7? ៸0?~0?u?eɟ?s?>?A?'ȍ???=??;?#?I?????1bt?ڲ`V??8?R??`??P?`?ōkHf???Qvz??\?m'(¾s???i?K"ן???~d?2?aC????L-?wP?xz???`[c????&Ky??C??????W?	]?I???4MRF????84uLߋ?I=^??ޫ?"?u???lw̟ʛه<)??p?!?y?:979?0Y_|N???:BX??????n1??hVf>O?@?4T??d?+?%??-?P??
???6ݼ>?_?	ĊKm?^??a|2??(?f%?A"?qi7Mڈ?ޮ??|?06?R? ????{?.Y?')??~b3?;`Y?/?ƹ?         |  x?]??r?@??3<?WafP?[?$?@آ?T.?R2l?????????}?????!ȥ8?^?&?҂S??SI?s#?G?????m?k[T?>u????a''??\,v,=????}?~#r??<?Cp?aU???4̜??-???a^]ܜz?KZ?m?^?-??I˂?Uw?V??hɲW:???o?{??( ?i?몄0??????{?R???0k?c??'K?[?-O$?.????Ӳ?+ۀy?X۶?,WsA\^+??G?>a?e?~?r??sw?ƁB?[DI???_?????Ԝ}RM?1A?V?D_?6Q?r?n??V??g4?aCٓ?z]?g'Q?̀ߟ?U?K??l<(??E?ꩯ{ݒ]?5*X????"
??=?p?????     