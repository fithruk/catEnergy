const range = document.querySelector('.range_point_line');
const exampleBox = document.querySelector('.example_box');
const mainImg = document.querySelector('.main_img');
const mw = window.innerWidth;
const body = document.querySelector('body');

if (mw <= 481){
    body.classList.remove();
    body.classList.add('phone');
    loadphone();
    activateMobileMenu ();
    
} else if ( mw > 480 && mw <= 769) {
    body.classList.remove();
    body.classList.add('tablet');
    loadTablet ();
    let rangeValue = document.querySelector('.tablet_range_point_line');
    const tabletExampleBox = document.querySelector('.tablet_example_box');
    rangeValue.addEventListener('touchmove', changeWidth);

    function changeWidth () {
        let w = rangeValue.value;
        tabletExampleBox.style.width = w + '%';
    }
} 



setTimeout(loadImg, 50);
range.addEventListener('click', showDifference);

function activateMobileMenu () {
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.phone_nav');
    burger.addEventListener('touchstart', () => {
        menu.classList.toggle('active');
    })
}

function loadImg () {
    mainImg.classList.add('loaded');
}

function showDifference () {
    w = range.value;
    exampleBox.style.width = w + '%';
    console.log(w);
};

function loadTablet () {
    body.innerHTML = "";
    body.innerHTML = `
        <div class="tablet_container">
        <header class="tablet_header">
            <div class="tablet_header_inner">
                <div class="tablet_logo_box">
                    <img class="tablet_logo_img" src="images/header/logo-desktop.png" alt="">
                </div>
                <nav class="tablet_nav">
                    <a class=" tablet_nav_link" href="index.html">главная</a>
                    <a class=" tablet_nav_link" href="catalog.html">Каталог продукции</a>
                    <a class=" tablet_nav_link" href="form.html">подбор программы</a>
                </nav>
            </div>
            <div class="tablet_header_content">
                <div class="tablet_title">
                    Функциональное питание для котов
                </div>
                <div class="tablet_sub_title">
                    Занялся собой? Займись котом!
                </div>
                <div class="tablet_header_button">
                    <a class="tablet_btn_link" href="#">подобрать программу</a>
                </div>
            </div>
            <div class="tablet_maim_img_box">
                <img class="tablet_main_img" src="images/header/index-can.png" alt="">
            </div>
        </header>
        <div class="tablet_programm_box">
            <div class="tablet_programm_item">
                <div class="tablet_programm_content">
                    <div class="tablet_programm_title">
                        похудение
                    </div>
                    <div class="tablet_programm_text">
                        Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
                    </div>
                    <div class="tablet_programm_link_box">
                        <a class="tablet_programm_link" href="#" >каталог slim</a>
                        <img class="slim_link_img" src="images/pic_programm/icon_arrow.png" alt="">
                    </div>
                </div>
                <div class="tablet_programm_img_box">
                    <img class="tablet_programm_img" src="images/pic_programm/cat_back.png" alt="">
                </div>
            </div>
            <div class="tablet_programm_item">
                <div class="tablet_programm_content">
                    <div class="tablet_programm_title">
                        набор массы
                    </div>
                    <div class="tablet_programm_text">
                        Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
                    </div>
                    <div class="tablet_programm_link_box">
                        <a class="tablet_programm_link" href="#" >каталог slim</a>
                        <img class="slim_link_img" src="images/pic_programm/icon_arrow.png" alt="">
                    </div>
                </div>
                <div class="tablet_programm_img_box">
                    <img class="tablet_programm_img" src="images/pic_programm/cat_back_mass.png" alt="">
                </div>
            </div>
        </div>
        <div class="tablet_how_its_work">
            <div class="tablet_title">
                Как это работает
            </div>
            <div class="tablet_steps_box">
                <div class="step_item">
                    <div class="step_img_box">
                        <img class="step_img" src="images/how_its_work/green_back_1.png" alt="">
                    </div>
                    <div class="step_content">
                        Функциональное питание содержит только полезные питательные вещества.
                    </div>
                    <img class="step_back" src="images/how_its_work/1.png" alt="">
                </div>
                <div class="step_item">
                    <div class="step_img_box">
                        <img class="step_img" src="images/how_its_work/Group_2.png" alt="">
                    </div>
                    <div class="step_content">
                        Выпускается в виде порошка, который нужно лишь залить кипятком и готово.
                    </div>
                    <img class="step_back" src="images/how_its_work/2.png" alt="">
                </div>
                <div class="step_item">
                    <div class="step_img_box">
                        <img class="step_img" src="images/how_its_work/Group_3.png" alt="">
                    </div>
                    <div class="step_content">
                        Замените один-два приема обычной еды на наше функциональное питание.
                    </div>
                    <img class="step_back" src="images/how_its_work/3.png" alt="">
                </div>
                <div class="step_item">
                    <div class="step_img_box">
                        <img class="step_img" src="images/how_its_work/Group_4.png" alt="">
                    </div>
                    <div class="step_content">
                        Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!
                    </div>
                    <img class="step_back" src="images/how_its_work/4.png" alt="">
                </div>
            </div>
        </div>
        <div class="tablet_live_example">
            <div class="tablet_title">
                Живой пример
            </div>
            <div class="tablet_live_desc">
                Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день. 
            </div>
            <div class="promies_box">
                <div class="range">
                    <div class="range_item">
                        5кг
                        <div class="sub_range">
                            снижение веса
                        </div>
                    </div>
                    <div class="range_item">
                        60 дней
                        <div class="sub_range">
                            затрачено времени
                        </div>
                    </div>
                </div>
                <div class="spended_money">
                    Затраты на питание: <br> 15 000 р.
                </div>
            </div>
            <div class="cat_wrapper">
                <div class="cat_box">
                    <img class="example_img" src="images/live_example/live_example_before.jpg" alt="">
                    <div class="tablet_example_box">
                        <img class="example_img" src="images/live_example/live_example_after.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="range_point_box">
                <div class="was_became">
                    было
                </div>
                <input class="tablet_range_point_line" value="0" type="range" min="1" max="100" step="2">
                <div class="was_became">
                    стало
                </div>
            </div>
        </div>
    </div>
    <div class="map_box">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253002806!2d30.320858715677204!3d59.93871916905467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTE4Ng!5e0!3m2!1sru!2sua!4v1651941814844!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <footer class="tablet_footer">
        <div class="tablet_container">
            <div class="tablet_footer_box">
                <div class="logo_box">
                    <img class="logo_img" src="images/header/logo-desktop.png" alt="">
                </div>
                <div class="social_box">
                    <a class="link_img" href="#"><img class="social_img" src="images/footer/vk.png" alt=""></a>
                    <a class="link_img" href="#"><img class="social_img" src="images/footer/inst.png" alt=""></a>
                    <a class="link_img" href="#"><img class="social_img" src="images/footer/fb.png" alt=""></a>
                </div>
                <div class="logo_box">
                    <img class="logo_img" src="images/footer/academy.png" alt="">
                </div>
            </div>
        </div>
    </footer>
    <script src="sourse/tabletCat.js"></script>
        `

}

function loadphone () {
    body.innerHTML = "";
    body.innerHTML = `
        <header class="phone_header">
        <div class="phone_container">
            <div class="phone_header_inner">
                <div class="headers_img_box">
                    <img class="header_img_phone" src="images/header/logo-mobile.png" alt="">
                    <img class="header_img_phone" src="images/header/logo-mobile-2.png" alt="">
                    <img class="header_img_phone" id="burger" src="images/header/Logo_mobile_burger.png" alt="">
                </div>
                <nav class="phone_nav">
                    <a class=" phone_nav_link" href="index.html">главная</a>
                    <a class=" phone_nav_link" href="catalog.html">Каталог продукции</a>
                    <a class=" phone_nav_link" href="form.html">подбор программы</a>
                </nav>
            </div>
        </div>
        <div class="phone_header_content">
            <div class="phone_container">
                <div class="phone_title">
                    Функциональное питание для котов
                </div>
                <div class="phone_sub_title">
                    Занялся собой? Займись котом!
                </div>
            </div>
        </div>
        <div class="phone_container">
            <div class="button_box">
                <div class="phone_header_main_img_box">
                    <img class="phone_header_main_img" src="images/header/index-can-mobile.png" alt="">
                </div>
                <div class="phone_header_button">
                    <a class="link_button_phone" href="form.html">подобрать программу</a>
                </div>
            </div>
        </div>
    </header>
    <div class="phone_container">
        <div class="phone_pic_programm_box">
            <div class="phone_pic_programm_item">
                <div class="title_box">
                    <div class="img_box">
                        <img class="pic_img" src="images/pic_programm/cat_back_phone.png" alt="">
                    </div>
                    <div class="title_text">
                        ПОХУДЕНИЕ
                    </div>
                </div>
                <div class="pic_programm_content">
                    Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
                </div>
                <div class="pic_programm_link_box">
                    <a class="pic_programm_link" href="catalog.html">каталог slim</a> <img class="pic_programm_arrow" src="images/pic_programm/icon_arrow.png" alt="">
                </div>
            </div>
            <div class="phone_pic_programm_item">
                <div class="title_box">
                    <div class="img_box">
                        <img class="pic_img" src="images/pic_programm/cat_back_mass_phone.png" alt="">
                    </div>
                    <div class="title_text">
                        НАБОР МАССЫ
                    </div>
                </div>
                <div class="pic_programm_content">
                    Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
                </div>
                <div class="pic_programm_link_box">
                    <a class="pic_programm_link" href="catalog.html">каталог slim</a> <img class="pic_programm_arrow" src="images/pic_programm/icon_arrow.png" alt="">
                </div>
            </div>
        </div>
        <div class="phone_how_its_work">
            <div class="phone_title">
                Как это работает
            </div>
            <div class="phone_steps_box">
                <div class="phone_steps_item">
                    <div class="phone_img_box">
                        <img class="phone_img" src="images/how_its_work/green_back_1.png" alt="">
                    </div>
                    <div class="phone_content">
                        Функциональное питание содержит только полезные питательные вещества.
                    </div>
                </div>
                <div class="phone_steps_item">
                    <div class="phone_img_box">
                        <img class="phone_img" src="images/how_its_work/Group_2.png" alt="">
                    </div>
                    <div class="phone_content">
                        Выпускается в виде порошка, который нужно лишь залить кипятком и готово.
                    </div>
                </div>
                <div class="phone_steps_item">
                    <div class="phone_img_box">
                        <img class="phone_img" src="images/how_its_work/Group_3.png" alt="">
                    </div>
                    <div class="phone_content">
                        Замените один-два приема обычной еды на наше функциональное питание.
                    </div>
                </div>
                <div class="phone_steps_item">
                    <div class="phone_img_box">
                        <img class="phone_img" src="images/how_its_work/Group_4.png" alt="">
                    </div>
                    <div class="phone_content">
                        Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="phone_live_example">
        <div class="phone_container">
            <div class="phone_title">
                Живой пример
            </div>
            <div class="phone_live_example_content">
                Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без
                изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
            </div>
            <div class="phone_range">
                <div class="range_item">
                    5кг
                    <div class="sub_range">
                        снижение веса
                    </div>
                </div>
                <div class="range_item">
                    60 дней
                    <div class="sub_range">
                        затрачено времени
                    </div>
                </div>
            </div>
            <div class="phone_spended_money">
                Затраты на питание: 15 000 РУБ.
            </div>
            <div class="images_box">
                <div class="img_box">
                    <img class="ex_img" src="images/live_example/live_example_before.jpg" alt="">
                </div>
                <div class="img_box">
                    <img class="ex_img" src="images/live_example/live_example_after.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="phone_map_box">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253002806!2d30.320858715677204!3d59.93871916905467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTE4Ng!5e0!3m2!1sru!2sua!4v1651941814844!5m2!1sru!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <footer class="phone_footer">
        <div class="phone_container">
            <div class="footer_logo_box">
                <img class="footer_logo" src="images/footer/footer_logo_mibile.png" alt="">
                <hr class="hr_footer">
            </div>
            <div class="footer_social_box">
                <img class="footer_social_img" src="images/footer/inst.png" alt="">
                <img class="footer_social_img" src="images/footer/vk.png" alt="">
                <img class="footer_social_img" src="images/footer/fb.png" alt="">
            </div>
            <hr class="hr_footer">
        </div>
    </footer>
    <script src="sourse/phone.js"></script>
        `
}