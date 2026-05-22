from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Project, Certificate, Experience

class PortoView(TemplateView):
    template_name = 'portofolio.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['projects'] = Project.objects.all()
        context['certificates'] = Certificate.objects.all()
        context['experiences'] = Experience.objects.all()
        return context