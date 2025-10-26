"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Trash2,
  Eye,
  Calendar,
  Mail,
  Phone,
  Building2,
  User,
  DollarSign,
  Clock,
  Filter,
  X,
} from "lucide-react";

interface FormSubmission {
  id: string;
  created_at: string;
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  preferred_contact: string;
  industry: string;
  description: string;
  interested_service: string;
  other_service_description?: string;
  budget_range: string;
  timeline: string;
  preferred_contact_time: string;
  form_data: Record<string, unknown>;
  locale: string;
}

export default function FormsPage() {
  const [forms, setForms] = useState<FormSubmission[]>([]);
  const [selectedForm, setSelectedForm] = useState<FormSubmission | null>(null);
  const [filterService, setFilterService] = useState<string>("all");

  // In production, fetch from Supabase
  useEffect(() => {
    // TODO: Replace with actual Supabase query
    // const fetchForms = async () => {
    //   const { data, error } = await supabase
    //     .from('inquiries')
    //     .select('*')
    //     .order('created_at', { ascending: false });
    //   if (data) setForms(data);
    // };
    // fetchForms();

    // For now, show sample data for demonstration
    const sampleForms: FormSubmission[] = [
      {
        id: "1",
        created_at: new Date().toISOString(),
        full_name: "John Smith",
        company_name: "Tech Innovations Inc",
        email: "john@techinnovations.com",
        phone: "+1234567890",
        preferred_contact: "email",
        industry: "technology",
        description: "We need a comprehensive web platform...",
        interested_service: "web-development",
        budget_range: "10000-25000",
        timeline: "3-6-months",
        preferred_contact_time: "afternoon",
        form_data: {},
        locale: "en",
      },
    ];

    setForms(sampleForms);
  }, []);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this form submission?")) {
      // TODO: Delete from Supabase
      // await supabase.from('inquiries').delete().eq('id', id);
      setForms(forms.filter((f) => f.id !== id));
      if (selectedForm?.id === id) setSelectedForm(null);
    }
  };

  const getServiceBadgeColor = (service: string) => {
    const colors: Record<string, string> = {
      "web-development": "bg-blue-500/10 text-blue-500 border-blue-500/20",
      "ui-ux-design": "bg-purple-500/10 text-purple-500 border-purple-500/20",
      "custom-systems": "bg-orange-500/10 text-orange-500 border-orange-500/20",
      "web-maintenance": "bg-green-500/10 text-green-500 border-green-500/20",
      "hosting-solutions": "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
      "cybersecurity-solutions": "bg-red-500/10 text-red-500 border-red-500/20",
      other: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    };
    return colors[service] || colors.other;
  };

  const getServiceName = (service: string) => {
    const names: Record<string, string> = {
      "web-development": "Web Development",
      "ui-ux-design": "UI/UX Design",
      "custom-systems": "Custom Systems",
      "web-maintenance": "Web Maintenance",
      "hosting-solutions": "Hosting Solutions",
      "cybersecurity-solutions": "Cybersecurity Solutions",
      other: "Other Service",
    };
    return names[service] || service;
  };

  const filteredForms =
    filterService === "all"
      ? forms
      : forms.filter((f) => f.interested_service === filterService);

  const services = Array.from(new Set(forms.map((f) => f.interested_service)));

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Form Submissions
          </h1>
          <p className="text-lg text-muted-foreground">
            View and manage client inquiry form submissions
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          <Button
            variant={filterService === "all" ? "default" : "outline"}
            onClick={() => setFilterService("all")}
            size="sm"
          >
            <Filter className="h-4 w-4 mr-2" />
            All Services ({forms.length})
          </Button>
          {services.map((service) => (
            <Button
              key={service}
              variant={filterService === service ? "default" : "outline"}
              onClick={() => setFilterService(service)}
              size="sm"
            >
              {getServiceName(service)} (
              {forms.filter((f) => f.interested_service === service).length})
            </Button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Forms List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              Submissions ({filteredForms.length})
            </h2>

            {filteredForms.length === 0 ? (
              <Card className="relative overflow-hidden">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">No form submissions yet</p>
                </CardContent>
                <BorderBeam duration={8} size={100} />
              </Card>
            ) : (
              filteredForms.map((form, index) => (
                <motion.div
                  key={form.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    className={`relative cursor-pointer hover:shadow-lg transition-all overflow-hidden ${
                      selectedForm?.id === form.id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => setSelectedForm(form)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">
                            {form.full_name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {form.company_name}
                          </p>
                          <Badge
                            className={getServiceBadgeColor(
                              form.interested_service
                            )}
                          >
                            {getServiceName(form.interested_service)}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedForm(form);
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(form.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          {form.email}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(form.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </CardContent>
                    <BorderBeam duration={8} size={100} />
                  </Card>
                </motion.div>
              ))
            )}
          </div>

          {/* Form Details */}
          <div className="lg:sticky lg:top-24 h-fit">
            {selectedForm ? (
              <motion.div
                key={selectedForm.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="relative overflow-hidden">
                  <CardHeader className="border-b">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {selectedForm.full_name}
                        </CardTitle>
                        <Badge
                          className={getServiceBadgeColor(
                            selectedForm.interested_service
                          )}
                        >
                          {getServiceName(selectedForm.interested_service)}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setSelectedForm(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Contact Information
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Company:</span>
                          <span>{selectedForm.company_name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Email:</span>
                          <a
                            href={`mailto:${selectedForm.email}`}
                            className="text-primary hover:underline"
                          >
                            {selectedForm.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Phone:</span>
                          <span>{selectedForm.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Preferred Contact:</span>
                          <Badge variant="outline">
                            {selectedForm.preferred_contact}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Best Time:</span>
                          <Badge variant="outline">
                            {selectedForm.preferred_contact_time}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Industry:</span>
                          <span>{selectedForm.industry}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <h3 className="font-semibold mb-3">Project Description</h3>
                      <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                        {selectedForm.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    {selectedForm.other_service_description && (
                      <div>
                        <h3 className="font-semibold mb-3">Custom Service Request</h3>
                        <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                          {selectedForm.other_service_description}
                        </p>
                      </div>
                    )}

                    {/* Budget & Timeline */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        Budget & Timeline
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">
                            Budget Range
                          </p>
                          <p className="font-semibold">{selectedForm.budget_range}</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">
                            Timeline
                          </p>
                          <p className="font-semibold">{selectedForm.timeline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          Submitted:{" "}
                          {new Date(selectedForm.created_at).toLocaleString()}
                        </span>
                        <Badge variant="outline">{selectedForm.locale}</Badge>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4">
                      <Button
                        variant="destructive"
                        className="flex-1"
                        onClick={() => handleDelete(selectedForm.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() =>
                          window.open(`mailto:${selectedForm.email}`)
                        }
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                  <BorderBeam duration={10} size={120} />
                </Card>
              </motion.div>
            ) : (
              <Card className="relative overflow-hidden">
                <CardContent className="p-12 text-center">
                  <Eye className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground">
                    Select a form to view details
                  </p>
                </CardContent>
                <BorderBeam duration={8} size={100} />
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
