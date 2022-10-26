from django.shortcuts import render


# Create your views here.

def index(request):
    print("rendering index page")
    return render(request, 'pages/index.html')
