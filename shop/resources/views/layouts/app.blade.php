<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="{{ asset('assets/css-tailwind/main.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/styles.min.css') }}"/>
    @livewireStyles
</head>
<body>
    <header>
        <!--Content Header-->
        <div class="bg-color-gray-dark  h-12 items-center flex">
            <div class=" w-[100%] px-3 md:px-8   flex justify-between text-xs md:text-md">
                <div class="flex items-center">
                    <div class="text-color-red-button"><i class='bx bx-phone-call'></i></div>
                    <div class="mx-2 text-color-gray-background-light font-medium"><span>Support</span>+212.448.494</div>
                </div>
                <div class="hidden md:flex">two</div>
                <div class="flex cursor-pointer">
                    <div>
                        <img
                        class="w-7 h-4"
                        src="https://www.shutterstock.com/image-vector/united-states-america-flag-vector-260nw-1406928203.jpg"
                        alt="language"/>
                    </div>
                    <div class="ml-2 text-color-gray-background-light">
                        <span>Eng/ $</span>
                    </div>
                    <div class="flex items-end">
                        <i class='bx bxs-down-arrow text-color-gray-background-light  text-xs mt-[1px]'style="font-size:9px;"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {{ $slot }}
    <footer>
        <!--Content Footer-->
    </footer>
<script src=""></script>
@livewireScripts
</body>
</html>
